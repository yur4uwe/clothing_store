import React from 'react';
import './Content.css';
import ClothingCard from '../clothing-card/ClothingCard';

/**
 * 
 * @typedef {Object} ClothingItem
 * @property {string} id - Unique identifier for the clothing item
 * @property {string} name - Name of the clothing item
 * @property {string} image - URL of the clothing item's image
 * @property {string} price - Price of the clothing item
 * @property {boolean} newItem - Indicates if the item is new
 * @property {boolean} sale - Optional description of the clothing item
 */

const Content = () => {
    /**
     * @type {Array<ClothingItem>} item
     */
    const items = [
        {
            id: '1',
            name: 'Ripped Skinny Jeans',
            image: 'https://www.w3schools.com/w3images/jeans1.jpg',
            price: '24.99',
            newItem: false,
            sale: false
        },
        {
            id: '2',
            name: 'Mega Ripped Jeans',
            image: 'https://www.w3schools.com/w3images/jeans2.jpg',
            price: '19.99',
            newItem: true,
            sale: false
        },
        {
            id: '3',
            name: 'Mega Ripped Jeans',
            image: 'https://www.w3schools.com/w3images/jeans2.jpg',
            price: '19.99',
            newItem: false,
            sale: false
        },
        {
            id: '4',
            name: 'Washed Skinny Jeans',
            image: 'https://www.w3schools.com/w3images/jeans3.jpg',
            price: '20.50',
            newItem: false,
            sale: false
        },
        {
            id: '5',
            name: 'Washed Skinny Jeans',
            image: 'https://www.w3schools.com/w3images/jeans3.jpg',
            price: '20.50',
            newItem: false,
            sale: false
        },
        {
            id: '6',
            name: 'Vintage Skinny Jeans',
            image: 'https://www.w3schools.com/w3images/jeans4.jpg',
            price: '14.99',
            newItem: false,
            sale: false
        },
        {
            id: '7',
            name: 'Vintage Skinny Jeans',
            image: 'https://www.w3schools.com/w3images/jeans4.jpg',
            price: '14.99',
            newItem: false,
            sale: true
        },
        {
            id: '8',
            name: 'Ripped Skinny Jeans',
            image: 'https://www.w3schools.com/w3images/jeans1.jpg',
            price: '24.99',
            newItem: false,
            sale: false
        },
    ];

    /**
     * @type {Array<import('react').JSX.Element>} gridContent
     */
    const gridContent = []

    for (let i = 0; i < items.length; i += 2) {
        gridContent.push((
            <div className="cl-grid-col">
                <ClothingCard key={items[i].id} item={items[i]} />
                <ClothingCard key={items[i + 1]?.id} item={items[i + 1]} />
            </div>
        ))
    }


    return (
        <div className='container'>
            <div className="content-heading grey-text">{items.length} {items.length === 1 ? "item" : "items"}</div>
            <div className='grid-container'>
                {gridContent.length > 0 ? (
                    <div className="clothing-grid">
                        {gridContent}
                    </div>
                ) :
                    <div className="no-items">
                        <i className="grey-text fa fa-ban"></i>
                        <div className="grey-text">No items available</div>
                    </div>
                }
            </div>

        </div>
    );
};

export default Content;