import React, { useState } from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, onAddTask, onDeleteTask, onToggleDone }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();

    if (newTaskName.trim() === "") {
      alert("Por favor, ingresa un nombre para la tarea.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      description: newTaskDescription,
      done: false,
    };

    onAddTask(newTask);

    setNewTaskName("");
    setNewTaskDescription("");
  };

  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleToggleDone = (taskId) => {
    onToggleDone(taskId);
  };

  return (
    <div className="task-list-container">
      <form className="task-form" onSubmit={handleAddTask}>
        <div>
          <label htmlFor="taskName">Nombre:</label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={newTaskName}
            onChange={(event) => setNewTaskName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="taskDescription">Descripción (opcional):</label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            value={newTaskDescription}
            onChange={(event) => setNewTaskDescription(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Agregar tarea</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={handleDeleteTask}
            onToggleDone={handleToggleDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
