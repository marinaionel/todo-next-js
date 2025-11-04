import { Todo } from "../models/todo";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  return (
    <div
      className={`flex items-center gap-3 p-3 border rounded ${
        todo.completed ? "bg-gray-100" : "bg-white"
      }`}
    >
      <input type="checkbox" checked={todo.completed} readOnly />
      <span className={todo.completed ? "line-through text-gray-500" : ""}>
        {todo.title}
      </span>
    </div>
  );
}
