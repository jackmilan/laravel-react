import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/Index";
import Create from "../pages/create-game/Index";
import Edit from "../pages/edit-game/Index";
import Toastr from './Toastr';
import Manager from '../api/games/Manager';
import { connect } from "react-redux";
import { addGame, updateGame, deleteGame, setGames } from "../store/actions";

const mapDispatchToProps = dispatch => {
    return {
        addGame: game => dispatch(addGame(game)),
        updateGame: game => dispatch(updateGame(game)),
        deleteGame: game => dispatch(deleteGame(game)),
        setGames: games => dispatch(setGames(games))
    };
};

const Main = ({ addGame, updateGame, deleteGame, setGames }) => {
    const getGames = async () => {
        try {
            const { data } = await Manager.getGames();

            setGames(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getGames();

        Echo.channel(`games`)
            .listen('.game.create', (e) => {
                addGame(e.game)
            }).listen('.game.update', (e) => {
                updateGame(e.game)
            }).listen('.game.delete', e => {
                deleteGame(e.game.id);
            })
    }, [])

    return (
        <Container className="pt-4">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={Create} exact />
                <Route path="/edit/:id" component={Edit} exact />
            </Switch>

            <Toastr />
        </Container>
    );
};

export default connect(null, mapDispatchToProps)(Main);