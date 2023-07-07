import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, onAddTask, onDeleteTask, onToggleDone }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();

    if (newTaskName.length < 3) {
      alert("El nombre de la tarea debe tener al menos 3 caracteres.");
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

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="taskName"
          placeholder="Nombre de la tarea"
          value={newTaskName}
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        <input
          type="text"
          name="taskDescription"
          placeholder="Descripción de la tarea (opcional)"
          value={newTaskDescription}
          onChange={(event) => setNewTaskDescription(event.target.value)}
        />
        <button type="submit">Agregar tarea</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
