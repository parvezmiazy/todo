import { useTodos } from "../contexts/TodosContext";
import Todo from "./Todo";
export default function TodoList() {
  const todos = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
