import { useState } from "react";
import { useTodos, useTodosDispatch } from "../contexts/TodosContext";
import { getNextId } from "../utils/getNextId";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            text: text, // we can also write this way text only if property and value is same
            id: getNextId(todos),
          });
        }}
      >
        Add
      </button>
    </>
  );
}
