import React from "react";

import "./TasksList.css";
import dummy from "../../dummy";
import Task from "../Task/Task";

const TasksList = ({ style }) => {
  return (
    <div className="list-tasks" style={{ ...style }}>
      {dummy.map((task) => {
        console.log(task);
        return <Task task={task} />;
      })}
    </div>
  );
};

export default TasksList;
