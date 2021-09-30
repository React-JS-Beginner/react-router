import React, { useEffect, useState } from "react";
import User from "../User/User";
import { Container, Row } from "react-bootstrap";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    //   .then((data) => setUsers(data.results))
  }, []);

  return (
    <Container className="mb-5 pb-5">
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
