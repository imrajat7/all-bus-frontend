import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import uniqid from 'uniqid';
import axios from 'axios';

class BookingModal extends Component {
    constructor(props){
        super(props);
        this.state={
            bookedId: this.props.bookedid,
            uniqueId: uniqid(),
            bookedBus: this.props.bookedbus,
            name: "",
            email: "",
            contactNo: "",
            address: "",
            numOfSeats: "1",
            errors: []
        }
    }

    componentDidMount(){

    }

    handleSubmit = (e)=>{
        e.preventDefault();
        //eslint-disable-next-line
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        let err = [];
        if(this.state.name.length<=2){
            err.push('Please enter a valid name')
        }
        else if(!validEmailRegex.test(this.state.email)){
            err.push('Please enter a valid email')
        }
        else if(this.state.contactNo.length<6){
            err.push('Please enter valid number');
        }
        else if(this.state.address.length<5){
            err.push('enter a valid address');
        }
        this.setState({
            errors:err
        })
        console.log(err);
        if(err.length===0){
            console.log('everything ok');
            console.log(this.state);
            axios.post('http://all-bus.herokuapp.com/booking/',{
                busId: this.state.bookedId,
                userId: this.state.uniqueId,
                name: this.state.name,
                email: this.state.email,
                contactNo: this.state.contactNo,
                numOfSeats: this.state.numOfSeats,
                address: this.state.address
            }).then(result=>{
                if(result.data.message==="Booking Done"){
                    this.props.onHide()
                    alert('Booking Successful');
                    
                }else{
                    this.props.onHide()
                    alert('Booking Failed!!!');
                }
            })
        }else{
            alert(err[0]);
        }
      
    }

    handleChange = (e)=>{
          this.setState({
            [e.target.name]: e.target.value,
        })
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
                Ticket Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGroupBusName">
                            <Row>
                                <Col>
                                    <Form.Label>Bus Name:</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control readOnly defaultValue={this.state.bookedBus} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="formGroupUserId">
                            <Row>
                                <Col>
                                    <Form.Label>Unique Id:</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control readOnly placeholder={this.state.uniqueId}/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Row>
                                <Col>
                                    <Form.Label>Name of Passenger:</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control name="name" onChange={this.handleChange} placeholder="Name" required/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Row>
                                <Col>
                                    <Form.Label>Email:</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control name="email" onChange={this.handleChange} placeholder="Email" required/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="contactNo">
                            <Row>
                                <Col>
                                    <Form.Label>Contact No.</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control name="contactNo" type="tel" onChange={this.handleChange} placeholder="Contact No." required/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="numOfSeats">
                            <Row>
                                <Col>
                                    <Form.Label>Number of Passenger:</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control name="numOfSeats" type="number" defaultValue="1" min="1" max="5" onChange={this.handleChange} required/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="address">
                            <Form.Label>Address:</Form.Label>
                            <Form.Control name="address" type="text" onChange={this.handleChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="outline-danger" onClick={this.props.onHide} style={{float: "right"}}>Close</Button>
                            <Button type="submit" variant="outline-success" style={{float: "right"}}>Book</Button>
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            </Modal>
        );
    }
}

export default BookingModal
