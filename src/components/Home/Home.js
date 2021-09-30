import logo from "../../logo.svg";
import React from "react";
import { Container } from "react-bootstrap";
import './Home.css'
const Home = () => {
  
  return (
    <Container>
      <h1 className="text-center pb-3"><span className="text-danger">Welcome</span> Everyone</h1>
      <div className="d-flex justify-content-center">
      <img src={logo} className="app-logo" alt="logo" />
      </div>
    </Container>
  );
};

export default Home;
