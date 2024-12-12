import React, { useState } from "react";

function TodoEditor({ onCreate }) {
  const [content, setContent] = useState("");

  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function onSubmit() {
    onCreate(content);
    setContent("");
  }

  return (
    <div className="TodoEditor">
      <h1>Todo</h1>
      <input 
        onChange={onChangeContent}
        value={content}
        type="text"
        placeholder="Add a new todo..."
      />
      <button onClick={onSubmit}>+</button>
    </div>
  );
}

export default TodoEditor;
