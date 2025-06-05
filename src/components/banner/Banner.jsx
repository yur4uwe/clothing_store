import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container banner-content'>
            <img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Jeans Image" className='banner-image' />
            <div className='banner-text'>
                <h1 className='white-text banner-title pri-title'>New arrivals</h1>
                <h2 className='white-text banner-title sec-title'>collection 2025</h2>
                <button className='white-text banner-button'>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;