import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import GameOptions from './GameOptions';

const imgPath = img => {
    return img ? `/images/${img}` : `/images/default.png`;
};

export default ({ game }) => {
    return (
        <Card>
            <Card.Img variant="top" src={imgPath(game.img)} />
            <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
                <Link className="btn btn-primary" to="/">
                    View
                </Link>

                <GameOptions game={game} />
            </Card.Body>
        </Card>
    );
};
