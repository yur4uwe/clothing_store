import React from 'react';
import './Newsletter.css';

/**
 * @param {{ isOpen: boolean, onClose: () => void }} props
 */
const NewsletterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="newsletter-modal">
                <i className="modal-close fa fa-times" onClick={onClose}></i>
                <h2>NEWSLETTER</h2>
                <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
                <input type="email" placeholder="Enter e-mail" />
                <button type="button" className='submit-newsletter white-text'>Subscribe</button>
            </div>
        </>
    );
};

export default NewsletterModal;