import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const User = (props) => {
  const { id, name, email, company } = props.user;
  const history = useHistory();

  const url = `/call/${id}`;

    const handleCallClick = () => {
        history.push(url);
    }

  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  return (
    <Col
      className="d-flex align-items-stretch"
      xl={3}
      lg={3}
      md={4}
      sm={12}
      xs={12}
    >
      <Card className="p-4 shadow-sm w-100">
        <p>
          <strong>Name : </strong>{" "}
          <strong className="text-danger">{name}</strong>
        </p>
        <p>
          <strong>Company : </strong>
          {company.name}
        </p>
        <p>
          <strong>Email : </strong>
          {email}
        </p>
        

        <Button onClick={handleCallClick} variant="outline-danger w-50">{phoneIcon} Call</Button>

      </Card>
    </Col>
  );
};

export default User;
