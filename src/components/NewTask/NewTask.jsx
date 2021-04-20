import React, { useContext, useRef, useState } from "react";
import { Button, Card, TextField } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./NewTask.css";
import { TaskContext } from "../../context/TaskContext";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);
  const formRef = useRef();

  const resetInput = () => {
    setTitle("");
    console.log(formRef.current);
  };

  return (
    <form
      style={{ width: "500px" }}
      onSubmit={(e) => {
        e.preventDefault();
        addTask(title);
        resetInput();
      }}
    >
      <Card className="new-task-container">
        <TextField
          spellcheck={false}
          uncontrolled
          value={title}
          onChange={(e) => setTitle(e.value)}
          inputStyles={{
            width: "100%",
          }}
          className="input-task-title"
          label="Title"
          hideExtra
        />
        <Button className="btn-add-task">Add Task</Button>
      </Card>
    </form>
  );
};

export default NewTask;
