import React, { useState } from "react";
import { Button, Card, IconButton } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./Task.css";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ task }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Card bordered className="task-content">
      <Button
        active={checked}
        className="card-task"
        onClick={() => setChecked((prev) => !prev)}
      >
        <p
          style={checked ? { textDecoration: "line-through" } : null}
          className="text-task-title"
        >
          {task.title}
        </p>
      </Button>

      <IconButton text={false} className="btn-delete">
        <AiFillDelete color="crimson" />
      </IconButton>
    </Card>
  );
};

export default Task;
