import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const GameDelete = ({ game, show, setShow }) => {
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete '{game.title}'</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => setShow(false)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default GameDelete;