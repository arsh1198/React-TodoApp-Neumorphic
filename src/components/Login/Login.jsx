import React from "react";
import { Button, Card } from "ui-neumorphism";
import { signInWithGoogle } from "../../firebase";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <Card bordered className="card-login">
        <div
          style={{
            display: "flex",
          }}
        >
          <p className="txt-todo">To Do</p>
          <img style={{ marginBottom: 28, marginLeft: 20 }} src="favicon.svg" />
        </div>
        <Button className="btn-login" onClick={signInWithGoogle}>
          <FcGoogle className="icon-google" size="24" />
          <p className="txt-btn">Sign In</p>
        </Button>
      </Card>
      <p className="txt-creds">Made with 💜 by ARSH!</p>
    </>
  );
};

export default Login;
