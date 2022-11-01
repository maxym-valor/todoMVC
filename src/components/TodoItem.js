import React, { useState } from "react";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";

import { editTodo, deleteTodo, completeTodo } from "../stores/todo";

export function TodoItem({ todo }) {
  const [isEditing, setEditingState] = useState(false);

  const handleDoubleClick = () => {
    setEditingState(true);
  };

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }

    setEditingState(false);
  };

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing: isEditing,
      })}
    >
      {isEditing && (
        <TodoTextInput
          text={todo.text}
          editing={isEditing}
          onSave={(text) => handleSave(todo.id, text)}
        />
      )}
      {!isEditing && (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
      )}
    </li>
  );
}

export default TodoItem;
