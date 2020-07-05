import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import Manager from "../../api/games/Manager";
import { setGames } from "../../store/actions";
import GameCard from "./components/GameCard";

const mapStateToProps = state => {
    return { games: state.gamesReducer.games };
};

const mapDispatchToProps = dispatch => {
    return {
        setGames: games => dispatch(setGames(games))
    };
};

const Home = ({ games, setGames }) => {
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
    }, []);

    return (
        <div>
            <h1 className="pb-4">Games</h1>

            <Row>
                {games.map(game => {
                    return (
                        <Col className="pb-4" lg="4" sm="6" key={game.id}>
                            <GameCard game={game} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
