import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SideBar from './components/side-bar/SideBar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Subscribe from './components/subscribe/Subscribe';
import './App.css';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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

    return (
        <>
            {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            <div className="app-layout">
                <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="main-content">
                    <Header toggleSidebar={toggleSidebar} />
                    <Banner />
                    <Content />
                    <Subscribe />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
