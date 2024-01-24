//import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodosProvider from "./contexts/TodosContext";
export default function App() {
  return (
    <TodosProvider>
      <h1>Prague itinerary</h1>
      <AddTodo />
      <TodoList />
    </TodosProvider>
  );
}
