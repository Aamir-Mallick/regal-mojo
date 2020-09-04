import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import ForgetPassword from "../ForgetPassword/ForgetPassword";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard:name" component={Dashboard} />
        <Route path="/forgetpassword" component={ForgetPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
