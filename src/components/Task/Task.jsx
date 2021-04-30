import React, { useContext } from "react";
import { Button, IconButton } from "ui-neumorphism";

import "./Task.css";
import { IoCloseSharp } from "react-icons/io5";
import { TaskContext } from "../../context/TaskContext";
import { FaCheck } from "react-icons/fa";

const Task = ({ task }) => {
  const { toggleComplete, deleteTask } = useContext(TaskContext);

  return (
    <div className="task-content">
      <Button
        bordered
        active={task.completed}
        className="card-task"
        onClick={() => {
          toggleComplete(task);
        }}
      >
        <p
          style={task.completed ? { textDecoration: "line-through" } : null}
          className="text-task-title"
        >
          {task.title}
        </p>
      </Button>

      <IconButton
        bordered
        className="btn-delete"
        onClick={() => deleteTask(task)}
        text={false}
      >
        {task.completed ? (
          <FaCheck color="#4CAF50" />
        ) : (
          <IoCloseSharp size={24} color="#FF5252" />
        )}
      </IconButton>
    </div>
  );
};

export default Task;
