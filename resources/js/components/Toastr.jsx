import React from 'react';
import { Toast } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleToastr } from '../store/actions';

const styles = {
    toastCard: {
        position: 'fixed',
        top: '68px',
        right: '12px'
    },
    toastBody: {
        color: 'white',
    }
};

const mapStateToProps = state => {
    return {
        show: state.toastrReducer.show,
        color: state.toastrReducer.color,
        status: state.toastrReducer.status,
        text: state.toastrReducer.text,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        toggleToastr: show => dispatch(toggleToastr(show))
    }
}

const Toastr = ({ show, color, status, text, toggleToastr }) => {
    return (
        <Toast
            style={{...styles.toastCard, background: color }}
            onClose={() => toggleToastr({ show: false })}
            show={show}
            autohide
        >
            <Toast.Header>
                <strong className="mr-auto">{status}</strong>
            </Toast.Header>
            <Toast.Body style={styles.toastBody}>{text}</Toast.Body>
        </Toast>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Toastr);