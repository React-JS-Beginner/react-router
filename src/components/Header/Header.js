import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <div className="p-5 text-center">
      <div className="row w-50 mx-auto gx-2">
        <div className="col">
          <NavLink className="nav" activeClassName="nav-active" to="/home">
            <Button variant="outline-danger w-100">Home</Button>
          </NavLink>
        </div>

        <div className="col">
          <NavLink className="nav" activeClassName="nav-active" to="/posts">
            <Button variant="outline-danger w-100">Posts</Button>
          </NavLink>
        </div>

        <div className="col">
          <NavLink className="nav" activeClassName="nav-active" to="/users">
            <Button variant="outline-danger w-100">Users</Button>
          </NavLink>
        </div>

        <div className="col">
          <NavLink className="nav" activeClassName="nav-active" to="/contacts">
            <Button variant="outline-danger w-100">Contacts</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
