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
          id: nonNull(stringArg()),
        },
        resolve: async (parent, { id }, ctx) => {
          const todo = await todoRepository.findOne(id);
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
          input: arg({ type: nonNull(CreateTodoInput) }),
        },
        resolve: async (parent, { input }, ctx) => {
          const { title } = input;
          const todo = new appModels.Todo();
          todo.id = v4();
          todo.title = title;
          todo.completed = false;
          await todoRepository.save(todo);
          return mapTodo(todo);
        },
      });
    },
  });
  const Post = objectType({
    name: "Post",
    description: "This is a description of a Post",
    definition(t) {
      t.nonNull.string("id");
      t.nonNull.string("uuid");
      t.nonNull.string("name");
      t.nonNull.list.nonNull.list.nonNull.float("geo");
      t.list.list.nonNull.float("messyGeo");
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
          offset: nonNull(intArg({ default: 0 })),
          limit: nonNull(intArg({ default: 20 })),
        },
        resolve: async (root, { limit, offset }, ctx) => {
          const todos = await todoRepository.find({
            skip: offset,
            take: limit,
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
