import React, { useState } from "react";
import { Button, Card, TextField } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./NewTask.css";

const NewTask = () => {
  return (
    <Card bordered className="new-task-container">
      <TextField
        inputStyles={{
          width: "100%",
        }}
        className="input-task-title"
        label="Title"
        hideExtra
      />
      <Button className="btn-add-task">Add Task</Button>
    </Card>
  );
};

export default NewTask;
