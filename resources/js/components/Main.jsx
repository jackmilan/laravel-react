import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/Index";
import Create from "../pages/create-game/Index";

export default () => {
    return (
        <Container className="pt-4">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={Create} exact />
            </Switch>
        </Container>
    );
};
