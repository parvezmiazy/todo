import { useState } from "react";
import { useTodosDispatch } from "../contexts/TodosContext";

export default function Todo({ todo }) {
  const [edit, setEdit] = useState(false);
  const dispatch = useTodosDispatch();
  let todoContent;

  if (edit) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              todo: {
                ...todo,
                text: e.target.value,
              },
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
              dispatch({
                type: "changed",
                todo: {
                  ...todo,
                  done: e.target.checked,
                },
              });
            }}
          />
          {todoContent}
          <button
            onClick={() => {
              dispatch({
                type: "deleted",
                id: todo.id,
              });
            }}
          >
            Delete
          </button>
        </label>
      </li>
    </>
  );
}
