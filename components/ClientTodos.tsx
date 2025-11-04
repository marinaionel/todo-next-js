"use client";

import { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../models/todo";

export default function ClientTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const refreshTodos = async () => {
    const res = await fetch("/api/todos");
    const newTodos: Todo[] = await res.json();
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500">
          No todos loaded yet. Click refresh to fetch.
        </p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}

      <button
        onClick={refreshTodos}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Refresh Todos
      </button>
    </div>
  );
}
