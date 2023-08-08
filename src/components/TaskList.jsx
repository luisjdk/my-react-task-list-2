import React, { useState } from "react";
import Task from "./Task";
import Header from "./Header";
import { Button, Input, Textarea, Alert } from "@chakra-ui/react";

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
      <Header />
      <form className="task-form" onSubmit={handleAddTask}>
        <div>
          <Input
            placeholder="Nombre:"
            width={"auto"}
            type="text"
            id="taskName"
            name="taskName"
            value={newTaskName}
            onChange={(event) => setNewTaskName(event.target.value)}
          />
        </div>
        <div>
          <Textarea
            width={"auto"}
            placeholder="Descripción (opcional):"
            id="taskDescription"
            name="taskDescription"
            value={newTaskDescription}
            onChange={(event) => setNewTaskDescription(event.target.value)}
          ></Textarea>
        </div>

        <Button
          size="md"
          height="30px"
          width="120px"
          border="2px"
          borderColor="blue.500"
          type="submit"
        >
          Añadir tarea
        </Button>
      </form>
      <div>
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
    </div>
  );
};

export default TaskList;
