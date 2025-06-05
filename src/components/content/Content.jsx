import React from 'react';
import './Content.css';

const Content = () => {
    const items = []

    return (
        <div>
            <div className="container content-heading grey-text">{items.length} {items.length === 1 ? "item" : "items"}</div>
        </div>
    );
};

export default Content;