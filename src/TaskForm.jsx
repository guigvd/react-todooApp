import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    if (taskName === "") {
      return;
    }
    onAdd(taskName);
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="Add task here..."
      />
    </form>
  );
};

export default TaskForm;
