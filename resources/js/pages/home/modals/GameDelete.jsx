import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteGame, callToastr } from '../../../store/actions';
import Manager from '../../../api/games/Manager';

const mapDispatchToProps = dispatch => {
    return {
        deleteGame: id => dispatch(deleteGame(id)),
        callToastr: toastrData => dispatch(callToastr(toastrData)),
    }
};

const GameDelete = ({ game, show, setShow, deleteGame, callToastr }) => {

    const handleDelete = async () => {
        try {
            await Manager.deleteGame(game.id);

            callToastr({
                show: true,
                status: 'Success',
                text: `${game.title} successfully removed`,
                color: 'green'
            });

            deleteGame(game.id);

            setShow(false);
        } catch (e) {
            callToastr({
                show: true,
                status: 'Error',
                text: e.response.data.message,
                color: 'red'
            });
        }
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