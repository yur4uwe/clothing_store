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
            <div className="image-container">
                <img className='image' src={item.image} alt={`${item.name} photo`} />
                {(item.sale || item.newItem) && (
                    <>
                        <span className='special black-background white-text'>
                            {item.newItem ? "New" : null}
                            {item.sale ? (item.newItem ? " | " : "") + "Sale" : null}
                        </span>
                        <button className='buy-now-btn white-text'>
                            Buy now
                            <i className='fa fa-shopping-cart'></i>
                        </button>
                    </>
                )}
            </div>
            <div className="item-text">
                <div className='item-name'>{item.name}</div>
                <b className={`item-price ${item.sale ? 'red-text' : ''}`}>${item.price}</b>
            </div>
        </div>
    );
};

export default ClothingCard;