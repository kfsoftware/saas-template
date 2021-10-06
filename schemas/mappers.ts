import { Todo } from "../db/models";

export function mapTodo(todo: Todo) {
  return {
    id: todo.id,
    text: todo.title,
    status: todo.completed ? "COMPLETED" : "PENDING",
  };
}
