import React, { useState } from 'react';
import './SideBar.css';

/**
 * @param {{ isOpen: boolean, toggleSidebar: () => void }} props
 */
const SideBar = ({ isOpen, toggleSidebar }) => {
    const [isJeansExtended, setIsJeansExtended] = useState(false);

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <i className='close-icon fa fa-times' onClick={toggleSidebar}></i>
            <div className="heading">
                <h3 className='black-text'><b>LOGO</b></h3>
            </div>
            <div className='side-bar-content'>
                <a className='item bar-item grey-text' href="#">Shirts</a>
                <a className='item bar-item grey-text' href="#">Dresses</a>
                <a className='item bar-item grey-text' href="#">
                    Jeans {isJeansExtended ?
                        <i className='fa fa-caret-up' onClick={() => setIsJeansExtended(false)}></i> :
                        <i className='fa fa-caret-down' onClick={() => setIsJeansExtended(true)}></i>
                    }
                </a>
                {isJeansExtended && (
                    <div className='jeans-submenu'>
                        <a className='item sub-item bar-item grey-text sp' href="#">
                            <i className='fa fa-caret-right'></i> Skinny</a>
                        <a className='item sub-item bar-item grey-text' href="#">Relaxed</a>
                        <a className='item sub-item bar-item grey-text' href="#">Bootcut</a>
                        <a className='item sub-item bar-item grey-text' href="#">Straight</a>
                    </div>
                )}
                <a className='item bar-item grey-text' href="#">Jackets</a>
                <a className='item bar-item grey-text' href="#">Gymwear</a>
                <a className='item bar-item grey-text' href="#">Blazers</a>
                <a className='item bar-item grey-text' href="#">Shoes</a>
            </div>
            <div className='side-bar-nav'>
                <a className='item nav-item' href="#footer">Contact</a>
                <a className='item nav-item' href="#footer">Newsletter</a>
                <a className='item nav-item' href="#footer">Subscribe</a>
            </div>
        </div>
    );
};

export default SideBar;