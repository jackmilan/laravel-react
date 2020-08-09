import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import GameDeleteModal from '../modals/GameDelete';

const styles = {
    dropdownBtn: {
        display: 'inline-block',
        float: 'right'
    }
};

const GameOptions = ({ game, history }) => {
    const [showDelete, setShowDelete] = useState(false);

    return (
        <div style={styles.dropdownBtn}>
            <DropdownButton
                variant="info"
                title="Options"
            >
                <Dropdown.Item onClick={() => history.push(`/edit/${game.id}`)} eventKey="1">Edit</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowDelete(true)} eventKey="1">Delete</Dropdown.Item>
            </DropdownButton>

            <GameDeleteModal game={game} show={showDelete} setShow={setShowDelete} />
        </div>
    );
};

export default withRouter(GameOptions);