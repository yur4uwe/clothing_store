import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <h4>Contact</h4>
            <p>Questions? Go ahead.</p>
            <form className='contact-form'>
                <input placeholder='Name' type="text" name="name" id="name" />
                <input placeholder='Email' type="email" name="email" id="email" />
                <input placeholder='Subject' type="text" name="subject" id="subject" />
                <input placeholder='Message' type="text" name="message" id="message" />
                <button type="submit" className='contact-button black-background white-text'>Send</button>
            </form>
        </div>
    );
};

export default Contact;