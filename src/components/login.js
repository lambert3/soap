import React from "react";
import "../appStyles/App.css";
import LoginBody from "./LoginBody";
import { BrowserRouter as Router, Route } from "react-router-dom";

function login(props) {
  // <Route path="/applicant/login" component={signup} />
  //   <Route path="/staff/login" component={signup} />
  //   <Route path="/admin/login" component={signupc} />

  let resolver = () => {
    return <Route component={LoginBody} />;
  };
  return <Router>{resolver()}</Router>;
}

export default login;
