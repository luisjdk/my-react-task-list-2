import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import SobreNosotros from "./components/SobreNosotros";
import Menus from "./components/Menus";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleDone = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <Router>
      <div>
        <Menus />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/tareas"
            element={
              <TaskList
                tasks={tasks}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                onToggleDone={handleToggleDone}
              />
            }
          />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
