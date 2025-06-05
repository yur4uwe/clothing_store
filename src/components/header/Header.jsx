import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='container header-content'>
            <h1 className='black-text header-title'>Jeans</h1>
            <menu className='header-menu'>
                <i className='menu-item fa fa-shopping-cart'></i>
                <i className='menu-item fa fa-search'></i>
            </menu>
        </div>
    );
};

export default Header;