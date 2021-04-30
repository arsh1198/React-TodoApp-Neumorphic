import React from "react";
import { Card } from "ui-neumorphism";
import { MdInfo } from "react-icons/md";
import "./NoTask.css";

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "38px",
    padding: "38px",
    color: "#2e2e2e",
  },
};

const NoTask = () => {
  return (
    <Card inset style={styles.card}>
      <MdInfo size={24} color="#4789fc" />
      <p className="txt-no-tasks">You don't have any Tasks, Add some!</p>
    </Card>
  );
};

export default NoTask;
