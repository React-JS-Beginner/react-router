import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 text-center">
      <div className="row w-50 mx-auto gx-2">
        <div className="col">
          <NavLink to="/home">
            <Button variant="outline-danger w-100">Home</Button>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to="/posts">
            <Button variant="outline-danger w-100">Posts</Button>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to="/users">
            <Button variant="outline-danger w-100">Users</Button>
          </NavLink>
        </div>
        <div className="col">
          <NavLink to="/contacts">
            <Button variant="outline-danger w-100">Contact</Button>
          </NavLink>
        </div>
      </div>

      {/* <NavLink to="/home">
        <Button variant="outline-danger">Home</Button>
      </NavLink>{' '}
      <NavLink to="/home">
        <Button variant="outline-danger">Posts</Button>
      </NavLink>{' '}
      <NavLink to="/home">
        <Button variant="outline-danger">Users</Button>
      </NavLink>{' '}
      <NavLink to="/home">
        <Button variant="outline-danger">Contacts</Button>
      </NavLink> */}
    </div>
  );
};

export default Header;
