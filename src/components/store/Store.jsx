import React from 'react';
import './Store.css';

const Store = () => {
    return (
        <div className='store'>
            <h4>Store</h4>
            <p><i className='fa fa-fw fa-map-marker'></i>Company Name</p>
            <p><i className='fa fa-fw fa-phone'></i>0044123123</p>
            <p><i className='fa fa-fw fa-envelope'></i>ex@mail.com</p>
            <h4>We accept</h4>
            <p><i className='fa fa-fw fa-cc-amex'></i>Amex</p>
            <p><i className='fa fa-fw fa-credit-card'></i>Credit Card</p>
            <div className='media-links'>
                <i className='fa fa-facebook-official'></i>
                <i className='fa fa-instagram'></i>
                <i className='fa fa-snapchat'></i>
                <i className='fa fa-pinterest-p'></i>
                <i className='fa fa-twitter'></i>
                <i className='fa fa-linkedin'></i>
            </div>
        </div>
    );
};

export default Store;