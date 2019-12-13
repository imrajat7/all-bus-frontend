import React,{Component} from 'react';
import {Modal, Button, Row, Column, Form} from 'react-bootstrap';

class BookingModal extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Book Ticket
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    Hello Bro Kaisa ha ?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }
}

export default BookingModal
