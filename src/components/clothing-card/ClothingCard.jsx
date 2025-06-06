import React from 'react';
import './ClothingCard.css';

/**
 * @typedef {Object} ClothingCardProps
 * @property {import('../content/Content').ClothingItem} item
 */

/** @type {React.FC<ClothingCardProps>} */
const ClothingCard = ({ item }) => {
    return (
        <div className='container clothing-card'>
            {item.sale ? (
                <span className='special black-background white-text'>Sale</span>
            ) : item.newItem ? (
                <span className='special black-background white-text'>New</span>
            ) : null}
            <img className='image' src={item.image} alt={`${item.name} photo`} />
            <div className="item-text">
                <div className='item-name'>{item.name}</div>
                <b className={`item-price ${item.sale ? 'red-text' : ''}`}>${item.price}</b>
            </div>
        </div>
    );
};

export default ClothingCard;