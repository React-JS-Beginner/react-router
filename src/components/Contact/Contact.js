import React from "react";
import { Card, Col } from "react-bootstrap";

const Contact = (props) => {
  const { name, phone, address } = props.contact;
  return (
    <Col
      className="d-flex align-items-stretch text-center"
      xl={4}
      lg={4}
      md={4}
      sm={12}
      xs={12}
    >
      <Card className="p-4 shadow w-100 fs-5">
        <p>
          <strong className="text-danger">{name}</strong>
        </p>
        <p>
          <strong>Phone : </strong>
          {phone}
        </p>
        <p>
          <strong>Address</strong>
          <br />
          {address.street},{address.suite},
          <br />
          {address.city}
        </p>
      </Card>
    </Col>
  );
};

export default Contact;
