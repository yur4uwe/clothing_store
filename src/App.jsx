import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SideBar from './components/side-bar/SideBar';
import Calculator from './components/calculator/Calculator';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Subscribe from './components/subscribe/Subscribe';
import Newsletter from './components/newsletter/Newsletter';
import './App.css';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isNewsletterOpen, setNewsletterOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    const openNewsletter = () => {
        setNewsletterOpen(true);
    };

    const closeNewsletter = () => {
        setNewsletterOpen(false);
    };

    return (
        <>
            {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            <div className="app-layout">
                <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} openNewsletter={openNewsletter} />
                <div className="main-content">
                    <Header toggleSidebar={toggleSidebar} />
                    <Banner />
                    <Calculator />
                    <Content />
                    <Subscribe />
                    <Footer />
                </div>
            </div>
            <Newsletter isOpen={isNewsletterOpen} onClose={closeNewsletter} />
        </>
    );
}

export default App;
