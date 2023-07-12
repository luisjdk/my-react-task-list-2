import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Home from "./components/Home";
import SobreNosotros from "./components/SobreNosotros";
import Menu from "./components/Menu";
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
        <Header />
        <Menu />
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
