import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
