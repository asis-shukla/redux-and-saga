import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> Blog and Users</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <div style={{ marginLeft: "10px" }}>
                <Link to="/blogposts">Blog Posts</Link>
              </div>
            </NavItem>
            <NavItem>
              <div style={{ marginLeft: "10px" }}>
                <Link to="/userlist">User List</Link>
              </div>
            </NavItem>
            <NavItem>
              <div style={{ marginLeft: "10px" }}>
                <Link to="/about">About</Link>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
