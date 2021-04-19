import React from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import TasksList from "./components/TasksList/TasksList";

function App() {
  return (
    <div className="App">
      <NewTask />
      <TasksList />
    </div>
  );
}

export default App;
