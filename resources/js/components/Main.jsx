import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";

export default () => {
    return (
        <Container>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={Create} exact />
            </Switch>
        </Container>
    );
};
