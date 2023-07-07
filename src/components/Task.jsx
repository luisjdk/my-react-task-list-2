import React from "react";

const Task = ({ task, onDeleteTask, onToggleDone }) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleToggleDone = () => {
    onToggleDone(task.id);
  };

  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={handleToggleDone} />
      <span className={task.done ? "done" : ""}>{task.name}</span>
      {task.description && (
        <span className="description"> - {task.description}</span>
      )}
      <button onClick={handleDeleteTask}>Eliminar</button>
    </li>
  );
};

export default Task;
