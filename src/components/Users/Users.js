import React from "react";
import User from "../User/User";
import { Container, Row } from "react-bootstrap";
import UserHook from "../hooks/UserHook";

const Users = () => {

  const [users] = UserHook();

  return (
    <Container fluid className="mb-5 pb-5">
      
      <h1 className="text-center pb-4">Users</h1>
      <Row className="g-4">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </Row>
    </Container>
  );
};

export default Users;
