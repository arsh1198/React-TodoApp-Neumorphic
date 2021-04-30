import React, { useContext } from "react";
import { Avatar, Card, IconButton, Tooltip } from "ui-neumorphism";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "../../firebase";
import "./UserCard.css";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { TaskContext } from "../../context/TaskContext";

const UserCard = () => {
  const { user } = useContext(AuthContext);
  const { clearTasks } = useContext(TaskContext);

  const signUserOut = () => {
    signOut();
    clearTasks();
  };

  return (
    <Card bordered className="card-user-info">
      <div className="user-info-container">
        <Avatar rounded src={user.photoURL} />
        <p className="txt-display-name">{user.displayName}</p>
      </div>
      <IconButton text={false} className="btn-sign-out" onClick={signUserOut}>
        <RiLogoutBoxRLine size="20" />
      </IconButton>
    </Card>
  );
};

export default UserCard;
