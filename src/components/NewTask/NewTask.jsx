import React, { useContext, useRef, useState } from "react";
import { Button, Card, TextField } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./NewTask.css";
import { TaskContext } from "../../context/TaskContext";
import firebase, { firestore } from "../../firebase";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const formRef = useRef();

  const { addTask } = useContext(TaskContext);

  const resetInput = () => {
    setTitle("");
    console.log(formRef.current);
  };

  return (
    <form
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