import { ApolloError } from '@apollo/client';
import { AtSymbolIcon } from '@heroicons/react/outline';
import { PageHeader } from '@kfsoftware/app';
import { useTenant } from '@kfsoftware/common';
import { useConfig } from '@kfsoftware/config';
import { ModalForm, TextField } from '@kfsoftware/forms';
import { EmptyState, Table } from '@kfsoftware/table';
import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Column,
  TableOptions,
  TableState,
  usePagination,
  UsePaginationOptions,
  UsePaginationState,
  useSortBy,
  UseSortByColumnOptions,
  UseSortByState,
  useTable,
} from 'react-table';
import * as yup from 'yup';

import DashboardLayout from '../../components/DashboardLayout';
import { Todo, useCreateTodoMutation, useGetTodosQuery } from '../../operations';

interface AddTODOOverlayProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSave: () => void;
}
const todoSchema = yup.object().shape({
  title: yup.string().required(),
});
function AddTODOOverlay({ open, setOpen, onSave }: AddTODOOverlayProps) {
  const [createTodo, createTodoData] = useCreateTodoMutation();
  const { current } = useTenant();
  return (
    <ModalForm
      schema={todoSchema}
      open={open}
      setOpen={setOpen}
      loading={createTodoData?.loading}
      defaultValues={{
        email: "",
      }}
      title="Add todo"
      onSubmit={async (values, methods) => {
        try {
          await createTodo({
            variables: {
              input: {
                title: values.title,
              },
            },
          });
          await setOpen(false);
          await onSave();
        } catch (e) {
          const ex = e as ApolloError;
          methods.setError(
            "title",
            {
              message: ex.graphQLErrors.map((i) => i.message).join(", "),
              type: "value",
            },
            { shouldFocus: true }
          );
        }
      }}
    >
      {({ methods }) => {
        return (
          <div className="space-y-4">
            <TextField
              label="Title"
              name="title"
              autoFocus={true}
              options={{}}
              register={methods.register}
            />
          </div>
        );
      }}
    </ModalForm>
  );
}

export default function DashboardIndex() {
  const config = useConfig();
  const [addTodoOverlay, setAddTodoOverlay] = useState(false);
  const { current } = useTenant();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { data, error, loading, refetch } = useGetTodosQuery({
    variables: {
      limit: 100,
      offset: 0,
    },
    skip: !current,
  });
  useEffect(() => {
    if (data) {
      setTodos((data.todos || []) as Todo[]);
    }
  }, [data]);
  const columns = useMemo(
    () =>
      [
        {
          Header: "Email",
          accessor: "text",
          Cell: function Cell({ row: { original } }) {
            return <div className="flex items-center">{original.text}</div>;
          },
        },
        {
          Header: "Status",
          accessor: "status",
          Cell: function Cell({ row: { original } }) {
            return <div className="flex items-center">{original.status}</div>;
          },
        },
      ] as (Column<Todo> & UseSortByColumnOptions<Todo>)[],
    []
  );

  const table = useTable(
    {
      data: todos,
      columns: columns,
      manualPagination: true,
      pageCount: loading ? 0 : 10,
      initialState: {
        pageIndex: page,
        pageSize: pageSize,
        pageOptions: [10, 20, 50, 100],
        sortBy: [
          {
            id: "createdAt",
            desc: true,
          },
        ],
      } as TableState<Todo> & UseSortByState<Todo> & UsePaginationState<Todo>,
    } as TableOptions<Todo> & UsePaginationOptions<Todo>,
    useSortBy,
    usePagination
  );

  return (
    <>
      <Head>
        <title>Dashboard - {config.name}</title>
      </Head>
      <DashboardLayout>
        <>
          <AddTODOOverlay
            open={addTodoOverlay}
            setOpen={setAddTodoOverlay}
            onSave={() => {
              refetch();
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <PageHeader
              title="Your TODOs"
              actionText="Create TODO"
              onAction={() => setAddTodoOverlay(true)}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            {loading || error || !!todos.length ? (
              <Table
                error={error}
                loading={loading}
                table={table as any}
                onRowClick={() => {}}
              />
            ) : (
              <div className="my-24">
                <EmptyState
                  title="No TODOs"
                  description="Get started by creating a TODO"
                  icon={AtSymbolIcon}
                  actionText="Create TODO"
                  onClick={() => setAddTodoOverlay(true)}
                />
              </div>
            )}
          </div>
        </>
      </DashboardLayout>
    </>
  );
}
