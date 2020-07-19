import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteGame } from '../../../store/actions';

const mapDispatchToProps = dispatch => {
    return {
        deleteGame: id => dispatch(deleteGame(id)),
    }
};

const GameDelete = ({ game, show, setShow, deleteGame }) => {

    const handleDelete = () => {
        deleteGame(game.id);
        setShow(false);
    }

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
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default connect(null, mapDispatchToProps)(GameDelete);