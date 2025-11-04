"use client";

import { useState } from "react";
import ClientTodoItem from "./ClientTodoItem";
import { useTodoStore } from "../stores/todoStore";

export default function ClientTodos() {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const [newTodoText, setNewTodoText] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    addTodo(newTodoText);
    setNewTodoText("");
  };

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet. Add one below!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <ClientTodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
          ))}
        </ul>
      )}

      <form onSubmit={handleAdd} className="mt-6 space-y-3">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
