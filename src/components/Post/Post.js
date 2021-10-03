import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { title, body } = props.post;
  return (
    <Col
      className="d-flex align-items-stretch"
      xl={6}
      lg={6}
      md={6}
      sm={12}
      xs={12}
    >
      <Card className="p-4 shadow">
        <h3 className="text-danger">{title.slice(0, 22)}</h3>
        <p>{body.slice(0, 110)}</p>
        <Link to='/users/userpost/id' className="text-danger">Posted by...</Link>
      </Card>
    </Col>
  );
};

export default Post;
