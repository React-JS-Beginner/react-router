import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const UserPost = () => {
    
  const {userID} = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
        <h3 className="text-center pb-4">That was posted by</h3>
    <Card className="p-4 shadow-sm w-75 mx-auto">

      <p>
        <strong>Name : </strong>{" "}
        <strong className="text-danger">{user.name}</strong>
      </p>
      <p>
        <strong>Company : </strong>
        {user.company?.name}
      </p>
      <p>
        <strong>Email : </strong>
        {user.email}
      </p>
    </Card>
    </div>
  );
};

export default UserPost;
