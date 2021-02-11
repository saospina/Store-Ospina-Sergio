import React from 'react'
import { Modal } from 'react-bootstrap';

const ConfirmationModalComponent = ({ smShow, handleClose }) => {
    return (
        <Modal
            className="text-dark"
            size="sm"
            show={smShow}
            onHide={() => handleClose(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-success" id="example-modal-sizes-title-sm">
                    Success
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-info">You have successfully redeemed this product.</Modal.Body>
        </Modal>
    )
}

export default ConfirmationModalComponent
