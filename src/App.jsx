import React, { useContext } from "react";
import { ProgressCircular } from "ui-neumorphism";
import "./App.css";
import Login from "./components/Login/Login";
import NewTask from "./components/NewTask/NewTask";
import TasksList from "./components/TasksList/TasksList";
import UserCard from "./components/UserCard/UserCard";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user, loading } = useContext(AuthContext);

  return (
    <div className="App">
      {loading && <ProgressCircular indeterminate />}
      {!user && !loading && <Login />}
      {user && (
        <>
          <UserCard />
          <NewTask />
          <TasksList />
        </>
      )}
    </div>
  );
}

export default App;
