import React from "react";
import { Card, Col } from "react-bootstrap";

const Post = (props) => {
  const { title, body } = props.post;
  return (
    <Col className="d-flex align-items-stretch" xl={6} lg={6} md={6} sm={12} xs={12}>
      <Card className="p-4 shadow">
        <h3 className="text-danger">{title.slice(0, 22)}</h3>
        <p>{body.slice(0, 110)}</p>
      </Card>
    </Col>
  );
};

export default Post;
