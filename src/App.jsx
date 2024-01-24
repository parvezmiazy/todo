import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { initialTodos } from "./data/todo";
import todoReducer from "./todoReducer";
export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  const handleAddTodo = (text) => {
    dispatch({
      type: "added",
      text: text, // we can also write this way text only if property and value is same
      id: getNextId(todos),
    });
  };

  const handleChangeTodo = (todo) => {
    dispatch({
      type: "changed",
      todo: todo,
    });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: "deleted",
      id: todoId,
    });
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
