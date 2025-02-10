import React, { useState } from "react";
import "./App.css";
const App = () => {
 const [tasks, setTasks] = useState([]);
 const [newTask, setNewTask] = useState("");

 const handleInputChange = (e) => {
  setNewTask(e.target.value);
 };

 const handleAddTask = () => {
  if (newTask.trim() !== "") {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
 };
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <form className="form">
          <input type="text" placeholder="Add a new task" value={newTask} onChange={handleInputChange} />
          <button type="submit">Add</button>
        </form>

        <ul className="list">
          <li className="task-item">
            <span className="task">Task 1</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
