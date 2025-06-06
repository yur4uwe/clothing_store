import React from 'react';
import './Header.css';

/**
 * @param {{ toggleSidebar: () => void }} props
 */
const Header = ({ toggleSidebar }) => {
    return (
        <header>
            <div className="small-header black-background white-text">
                <h1 className='header-title'>LOGO</h1>
                <i className='fa fa-bars' onClick={toggleSidebar}></i>
            </div>
            <div className='container header-content'>
                <h1 className='black-text header-title'>Jeans</h1>
                <menu className='header-menu'>
                    <i className='menu-item fa fa-shopping-cart'></i>
                    <i className='menu-item fa fa-search'></i>
                </menu>
            </div>
        </header>
    );
};

export default Header;