import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
// import { useHistory, useParams } from "react-router";

const Call = () => {
    
  const { callId } = useParams();
  const [user, setUser] = useState({});
  //   const history = useHistory();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${callId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />

  /*  const handleClick = () => {
    history.push("/friends");
  }; */
  return (
    <div>
      <h3 className="text-center pb-4">Here's the dial number of  <span className='text-danger'>USER({callId})</span> </h3>
      <Card className="text-center p-4 shadow w-25 mx-auto fs-5">
        <p>
          <strong className="text-danger">{user.name}</strong>
        </p>
        <p>
          <strong className="text-danger">{phoneIcon}</strong>&nbsp;&nbsp;
          {user.phone}
        </p>
        <p>
          <strong>Address</strong>
          <br />
          {user.address?.street},{user.address?.suite},
          <br />
          {user.address?.city}
        </p>
      </Card>
    </div>
  );
};

export default Call;
