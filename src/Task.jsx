import { useState } from "react";
import Checkbox from "./Checkbox";

const Task = ({ name, done, onToggle, onDelete, onEditName }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={`task ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />

      {!editMode && (
        <span onClick={() => setEditMode((prev) => !prev)}>{name}</span>
      )}
      {editMode && (
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            setEditMode(false);
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(ev) => onEditName(ev.target.value)}
          />
        </form>
      )}

      <button className="trash" onClick={onDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default Task;
