import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import GameDeleteModal from '../modals/GameDelete';

const styles = {
    dropdownBtn: {
        display: 'inline-block',
        float: 'right'
    }
};

export default ({ game }) => {
    const [showDelete, setShowDelete] = useState(false);

    return (
        <div style={styles.dropdownBtn}>
            <DropdownButton
                variant="info"
                title="Options"
            >
                <Dropdown.Item onClick={() => setShowDelete(true)} eventKey="1">Delete</Dropdown.Item>
            </DropdownButton>

            <GameDeleteModal game={game} show={showDelete} setShow={setShowDelete} />
        </div>
    );
};