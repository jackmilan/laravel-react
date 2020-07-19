import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/Index";
import Create from "../pages/create-game/Index";
import Toastr from './Toastr';
import { connect } from "react-redux";
import { addGame, deleteGame } from "../store/actions";

const mapDispatchToProps = dispatch => {
    return {
        addGame: game => dispatch(addGame(game)),
        deleteGame: game => dispatch(deleteGame(game))
    };
};

const Main = ({addGame, deleteGame}) => {
    useEffect(() => {
        Echo.channel(`games`)
            .listen('.game.create', (e) => {
                addGame(e.game)
            }).listen('.game.delete', e => {
                deleteGame(e.game.id);
            })
    }, [])

    return (
        <Container className="pt-4">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={Create} exact />
            </Switch>

            <Toastr />
        </Container>
    );
};

export default connect(null, mapDispatchToProps)(Main);