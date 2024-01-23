import { useState } from "react";

export default function Todo({ todo, onChangeTodo, onDeleteTodo }) {
  const [edit, setEdit] = useState(false);

  let todoContent;

  if (edit) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={(e) => {
            onChangeTodo({
              ...todo,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setEdit(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.text}
        <button onClick={() => setEdit(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) => {
              onChangeTodo({
                ...todo,
                done: e.target.checked,
              });
            }}
          />
          {todoContent}
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </label>
      </li>
    </>
  );
}
