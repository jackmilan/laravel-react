import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import GameCard from "./components/GameCard";

const mapStateToProps = state => {
    return { games: state.gamesReducer.games };
};

const Home = ({ games }) => {
    return (
        <div>
            <h1 className="pb-4">Games</h1>

            <Row>
                {games.sort((a, b) => b.id - a.id).map(game => {
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

export default connect(mapStateToProps)(Home);
