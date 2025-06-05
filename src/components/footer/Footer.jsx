import React from 'react';
import About from '../about/About';
import Store from '../store/Store';
import Contact from '../contact/Contact';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className='container footer'>
                <Contact />
                <About />
                <Store />
            </footer>
            <div className='container black-background footer-bottom'>
                <p className='footer-text white-text'>Powered by <a className='white-text' href="">my hate to JS</a></p>
            </div>
        </>
    );
};

export default Footer;