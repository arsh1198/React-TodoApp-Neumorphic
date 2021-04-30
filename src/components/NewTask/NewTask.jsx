import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Card, TextField } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./NewTask.css";
import { TaskContext } from "../../context/TaskContext";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);
  const [inputError, setError] = useState(false);
  const inputRef = useRef();

  const resetInput = () => {
    setTitle("");
    setError(false);
  };

  useEffect(() => {
    document
      .getElementById(`${inputRef.current.input.props.id}`)
      .setAttribute("spellCheck", "false");
  }, []);

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (title === "") setError(true);
        else {
          addTask(title);
          resetInput();
        }
      }}
    >
      <Card className="new-task-container">
        <TextField
          ref={inputRef}
          onBlur={() => setError(false)}
          autofocus
          bordered
          spellcheck={false}
          uncontrolled
          value={title}
          onChange={(e) => setTitle(e.value)}
          spellCheck={false}
          inputStyles={{
            width: "100%",
            borderColor: inputError ? "#FF5252" : null,
          }}
          className="input-task-title"
          label="Title"
          hideExtra
        />
        <Button onClick={() => {}} className="btn-add-task">
          <p className="btn-text">Add</p>
        </Button>
      </Card>
    </form>
  );
};

export default NewTask;
