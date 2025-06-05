import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SideBar from './components/side-bar/SideBar';
import Content from './components/content/Content';

function App() {
    return (
        <div>
            <SideBar />
            <Header />
            <Banner />
            <Content />
        </div>
    );
}

export default App;
