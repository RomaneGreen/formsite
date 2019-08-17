import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';


export default class Contact extends Component {
    render() {
        return (
            <div>
                <p>Send Us an email !</p> 
                <ReactContactForm to="romane71193@gmail.com"
                 titlePlaceholder="Your Name"> <br></br>
                contentsRows={1}>
                </ReactContactForm>
            </div>
        )
    }
}