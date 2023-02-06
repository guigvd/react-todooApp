import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // CHECK IF HAVE TASKS IN LOCALHOST AND GET IT
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  const addTask = (name) => {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  };

  const removeTask = (indexRemove) => {
    if (tasks.length === 1) {
      localStorage.clear();
    }
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexRemove);
    });
  };

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const complete = tasks.filter((t) => t.done).length;
  const totalTasks = tasks.length;

  const getMessage = () => {
    const percent = (complete / totalTasks) * 100;

    if (percent === 0) {
      return "Try to do at least one! 🙏";
    }
    if (percent === 100) {
      return "Nice job for today! 🏝";
    }
    return "Keep it going 💪🏻";
  };

  const renameTask = (index, newName) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  };

  return (
    <div>
      <h1>
        {complete}/{totalTasks} Complete
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          {...task}
          onToggle={(done) => updateTaskDone(index, done)}
          onDelete={() => removeTask(index)}
          onEditName={(newName) => renameTask(index, newName)}
        />
      ))}
    </div>
  );
}

export default App;
