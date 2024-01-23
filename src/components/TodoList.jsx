import Todo from "./Todo";
export default function TodoList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onChangeTodo={onChangeTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}
