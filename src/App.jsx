import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { initialTodos } from "./data/todo";
export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: getNextId(todos), text: text, done: false }]);
  };

  const handleChangeTodo = (todo) => {
    const nextTodo = todos.map((t) => {
      if (t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    });
    setTodos(nextTodo);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
