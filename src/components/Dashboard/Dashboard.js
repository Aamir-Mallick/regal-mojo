import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as firebase from "firebase";
import "../../service/config";
import { fetchData } from "../../redux/Actions";
import { useHistory, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button } from "react-bootstrap";
import "./DashboardStyle.css";

function Dashboard() {
  const param = useParams();
  const history = useHistory();
  const data = useSelector((state) => state.DashBoardDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const onLogOutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("./");
      });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Regal Mojo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <span>{param.name}</span>
          </Navbar.Text>
          <Button onClick={onLogOutHandler}>Log Out</Button>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <h1>Welcome to Regla Mojo News Dashboard</h1>
        <h6>Explore and get most recent News around the world</h6>
      </div>
      <div>
        <div className="dashboard-main-container">
          {data.data ? (
            data.data.map((items, index) => {
              return (
                <div key={index} className="card-container">
                  <div>
                    <img src={items.urlToImage} alt="e.x" width="240px" />
                  </div>
                  <h3>{items.title}</h3>
                  <div className="description">{items.description}</div>

                  <span>
                    <a href={items.url}>Go to site</a>
                  </span>
                  <span>{items.author}</span>
                </div>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
