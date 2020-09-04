import React, { useState } from "react";
import * as firebase from "firebase";
import "../../service/config";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import { Form, Navbar, Button } from "react-bootstrap";
import "./LoginStyle.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getRegistePage = () => {
    history.push("./register");
  };

  const authChange = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push(`./dashboard${user.displayName}`);
      }
    });
  };

  const gotToDashboardHandler = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("hii");
        authChange();
      })
      .catch((error) => {
        swal("Something went wrong!", error.message, "error");
      });
  };

  const getPasswordhandler = () => {
    history.push("./forgetpassword");
  };

  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand bg="light">Regal Mojo</Navbar.Brand>
        </Navbar>
      </div>
      <div className="login-main-container">
        <h1 style={{ textAlign: "center" }}>Log in</h1>
        <Form onSubmit={gotToDashboardHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Button variant="secondary" type="submit" block>
            Log In
          </Button>
        </Form>

        <div className="forget-password" onClick={getPasswordhandler}>
          forget password
        </div>
        <div onClick={getRegistePage} className="register">
          Register Now
        </div>
      </div>
    </>
  );
}

export default Login;
