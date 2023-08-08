import React from "react";
import { Button, Checkbox } from "@chakra-ui/react";

const Task = ({ task, onDeleteTask, onToggleDone }) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleToggleDone = () => {
    onToggleDone(task.id);
  };

  return (
    <ul>
      <Checkbox
        margin={2}
        size="lg"
        checked={task.done}
        onChange={handleToggleDone}
      />

      <span className={task.done ? "done" : ""}>{task.name}</span>
      {task.description && (
        <span className="description"> - {task.description}</span>
      )}
      <Button
        size="sm"
        height="18px"
        width="100px"
        border="2px"
        borderColor="blue.500"
        onClick={handleDeleteTask}
        my={6}
        margin={3}
      >
        Eliminar
      </Button>
    </ul>
  );
};

export default Task;
