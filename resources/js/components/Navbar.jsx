import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const styles = {
    navbar: {
        position: 'sticky',
        top: 0,
        zIndex: 99
    },
}

export default () => {
    return (
        <Navbar style={styles.navbar} bg="dark" variant="dark">
            <Navbar.Brand>
                <Link className="text-white" to="/">Laravel + React</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="text-white" to="/">Home</Link>
                <Link className="ml-3 text-white" to="/create">
                    Create
                </Link>
            </Nav>
        </Navbar>
    );
};
