import React, { useContext } from "react";
import { Button, Card, IconButton } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./Task.css";
import { AiFillDelete } from "react-icons/ai";
import { TaskContext } from "../../context/TaskContext";
import { FaCheck } from "react-icons/fa";
import { firestore } from "../../firebase";

const Task = ({ task }) => {
  const { toggleComplete, deleteTask } = useContext(TaskContext);

  return (
    <Card bordered className="task-content">
      <Button
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
        className="btn-delete"
        onClick={() => deleteTask(task)}
        text={false}
      >
        {task.completed ? (
          <FaCheck color="green" />
        ) : (
          <AiFillDelete color="crimson" />
        )}
      </IconButton>
    </Card>
  );
};

export default Task;
