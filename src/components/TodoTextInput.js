import React, { useState } from "react";
import classnames from "classnames";

function TodoTextInput({ onSave, text, placeholder, editing, newTodo }) {
  const [currentText, setText] = useState(text || "");

  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      if (newTodo) {
        setText("");
      }
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = (e) => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: editing,
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={currentText}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
}

export default TodoTextInput;
