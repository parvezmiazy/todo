import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="text" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
}
