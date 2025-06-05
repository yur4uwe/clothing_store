import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <form className='container black-background subscribe' onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
        }}>
            <h1 className='white-text'>Subscribe</h1>
            <p className='white-text'>To get special offers and VIP treatment:</p>
            <input className='grey-text' type="email" placeholder='Enter e-mail' />
            <button className='white-text subscribe-button' type="submit" >Subscribe</button>
        </form>
    );
};

export default Subscribe;