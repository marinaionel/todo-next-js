import TodoItem from "../components/TodoItem";
import ClientTodos from "../components/ClientTodos";
import { getTodos } from "./api/todos/data";

export default function HomePage() {
  const serverTodos = getTodos(); // server-rendered todos

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Server-rendered Todos */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Server-rendered Todos</h2>
        <ul className="space-y-2">
          {serverTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>

      {/* Client-rendered Todos */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Client-rendered Todos</h2>
        <ClientTodos />
      </section>
    </div>
  );
}
