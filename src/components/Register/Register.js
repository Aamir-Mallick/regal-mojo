import React, { useState } from "react";
import * as firebase from "firebase";
import "../../service/config";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Navbar } from "react-bootstrap";
import "./RegisterStyle.css";

function Register() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [dataOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   firebase.database().ref("user").push({
  //     name: "Aamir",
  //   });
  // }, []);

  const setToDatabase = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      contact !== "" &&
      dataOfBirth !== "" &&
      email !== "" &&
      password !== ""
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((u) => {
          return u.user.updateProfile({
            displayName: name,
          });
        })
        .then(() => {
          swal(
            "Great!",
            "You have successfully signed up go back and log in",
            "success"
          );
        })
        .catch((error) => {
          swal("Something went wrong!", error.message, "error");
        });
    } else {
      swal("Something went wrong!", "fields are empty", "error");
    }
  };
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand bg="light">Regal Mojo</Navbar.Brand>
        </Navbar>
      </div>
      <div className="resgister-main-container">
        <h1 style={{ textAlign: "center" }}>register now</h1>

        <Form onSubmit={setToDatabase}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              size="sm"
              type="text"
              placeholder="Enter Name"
              value={name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              onChange={(e) => setContact(e.target.value)}
              size="sm"
              type="text"
              placeholder="Enter you Mobile number"
              value={contact}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDate">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              onChange={(e) => setDateOfBirth(e.target.value)}
              size="sm"
              type="date"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              size="sm"
              type="email"
              placeholder="Enter email"
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              size="sm"
              type="password"
              placeholder="Password"
              value={password}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Register;
