import { UserInputError } from "apollo-server";
import { transformSchemaFederation } from "graphql-transform-federation";
import {
  arg,
  enumType,
  inputObjectType,
  intArg,
  interfaceType,
  list,
  makeSchema,
  nonNull,
  objectType,
  scalarType,
  stringArg,
} from "nexus";
import { Connection } from "typeorm";
import * as appModels from "../db/models";
import { v4 } from "uuid";
import { mapTodo } from "./mappers";
export function getSchema(dbConn: Connection) {
  const todoRepository = dbConn.getRepository(appModels.Todo);
  const Mutation = objectType({
    name: "Mutation",
    definition(t) {
      t.nonNull.field("markTodoAsComplete", {
        type: Todo,
        args: {
          tenantId: nonNull(stringArg()),
          id: nonNull(stringArg()),
        },
        resolve: async (parent, { id, tenantId }, ctx) => {
          const todo = await todoRepository.findOne({
            where: {
              id,
              tenantId,
            },
          });
          if (!todo) {
            throw new UserInputError("Todo not found", {
              argumentName: "id",
            });
          }
          todo.completed = true;
          await todoRepository.save(todo);
          return mapTodo(todo);
        },
      });
      t.nonNull.field("createTodo", {
        type: Todo,
        args: {
          tenantId: nonNull(stringArg()),
          input: arg({ type: nonNull(CreateTodoInput) }),
        },
        resolve: async (parent, { input, tenantId }, ctx) => {
          const { title } = input;
          const todo = new appModels.Todo();
          todo.id = v4();
          todo.title = title;
          todo.completed = false;
          todo.tenantId = tenantId;
          await todoRepository.save(todo);
          return mapTodo(todo);
        },
      });
    },
  });
  const TodoStatus = enumType({
    name: "TodoStatus",
    members: ["PENDING", "COMPLETED"],
  });
  const Todo = objectType({
    name: "Todo",
    description: "This is a description of a Todo",
    definition(t) {
      t.nonNull.string("id");
      t.nonNull.string("text");
      t.nonNull.field("status", { type: TodoStatus });
    },
  });
  const Query = objectType({
    name: "Query",
    definition(t) {
      t.list.field("todos", {
        type: Todo,
        args: {
          tenantId: nonNull(stringArg()),
          offset: nonNull(intArg({ default: 0 })),
          limit: nonNull(intArg({ default: 20 })),
        },
        resolve: async (root, { limit, offset, tenantId }, ctx) => {
          const todos = await todoRepository.find({
            skip: offset,
            take: limit,
            where: {
              tenantId,
            },
          });
          return todos.map(mapTodo);
        },
      });
    },
  });

  const CreateTodoInput = inputObjectType({
    name: "CreateTodoInput",
    definition(t) {
      t.nonNull.string("title");
    },
  });
  return makeSchema({
    types: [Query, Mutation],
  });
}
export function getFederatedSchema(dbConn: Connection) {
  const schema = getSchema(dbConn);
  return transformSchemaFederation(schema, {
    Query: {
      extend: true,
    },
    Mutation: {
      extend: true,
    },
  });
}
