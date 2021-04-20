import React from "react";
import { Card } from "ui-neumorphism";
import { MdInfo } from "react-icons/md";

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "38px",
    padding: "38px",
    color: "#2e2e2e",
  },
  text: {
    marginLeft: "18px",
  },
};

const NoTask = () => {
  return (
    <Card inset style={styles.card}>
      <MdInfo size={24} color="#4789fc" />
      <p style={styles.text}> You don't have any Tasks yet, Add some!</p>
    </Card>
  );
};

export default NoTask;
