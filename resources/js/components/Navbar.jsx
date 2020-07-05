import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to="/">Laravel + React</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link className="ml-3" to="/create">
                    Create
                </Link>
            </Nav>
        </Navbar>
    );
};
