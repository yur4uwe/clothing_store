import React from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SideBar from './components/side-bar/SideBar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import './App.css';
import Subscribe from './components/subscribe/Subscribe';

function App() {
    return (
        <div>
            <SideBar />
            <Header />
            <Banner />
            <Content />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
