import React from 'react';
import contactUsGif from '../../assets/contact.jpg'
import './ContactUs.css'

function ContactUs(){
    
    return(
        <div className="container contact-outer-div">
            <div className="row">
                <div className="col col-lg-6 col-md-8 col-sm-12">
                    <img src={contactUsGif} className="contact-image" alt='Contact Us Gif'/>
                </div>
                <div className="contact-inner-div col col-lg-5 col-md-4 card" style={{marginTop: '3%'}}>
                    <h1>Contact Us</h1> <br></br>
                    <h5><b>Email:</b></h5> <p>contact@allbus.com</p>
                    <h5><b>Contact No:</b></h5> <p>+917006900001</p>
                    <h5><b>Address:</b></h5> <p>Room no 408 Marco Polo Hostel Chitkara University Rajpura Punjab 140401</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs