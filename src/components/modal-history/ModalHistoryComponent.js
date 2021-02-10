import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const ModalHistoryComponent = ({ products, modal, handleClose }) => {

    const latestProducts = products.slice(-5)

    return (
        <Modal
            show={modal}
            onHide={() => handleClose(false)}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-info">Shopping history</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-success">Last 5 items purchased:</h5>
                {latestProducts.map(product => {
                    return (
                        <div key={product.createDate}>
                            <p className="text-body">{product.name}</p>
                            <ul className="text-dark">
                                <li>
                                    {product.cost}
                                </li>
                                <li>
                                    {product.category}
                                </li>
                                <li>
                                    {product.createDate}
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={product.img.hdUrl}
                                    >
                                        Product image
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )

                })}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(false)}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>

    )
}

export default ModalHistoryComponent