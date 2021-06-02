import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export class FormModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.closeModalFx}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Name" name="bookName" onChange={this.props.updateBookName} value={this.props.name} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" name="description" onChange={this.props.updateDescription} value={this.props.description}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" placeholder="Image URL" name="imgUrl" onChange={this.props.updateImgUrl} value={this.props.img}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update Info
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeModalFx}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default FormModal
