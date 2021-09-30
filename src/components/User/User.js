import React from "react";
import { Card, Col } from "react-bootstrap";

const User = (props) => {
  const { name, email, company } = props.user;
  return (
    <Col
      className="d-flex align-items-stretch"
      xl={3}
      lg={3}
      md={4}
      sm={12}
      xs={12}
    >
      <Card className="p-4 shadow w-100">
        <p>
          <strong>Name : </strong> <strong className="text-danger">{name}</strong>
        </p>
        <p>
          <strong>Company : </strong>{company.name}
        </p>
        <p>
          <strong>Email : </strong>{email}
        </p>
      </Card>
    </Col>
  );
};

export default User;
