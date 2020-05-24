import React from 'react';

const ItemDetailsView = (props) => {
    return(
        <div className="mealtime-view item-details-view">
            <div className="item-details-header">
                <div className="item-details-info">
                    <h1 className="section-heading">{props.activeItem.name}</h1>
                    <p>{props.activeItem.description}</p>
                </div>
                <div className="item-details-price">
                    <h1 className="price">{props.activeItem.price}</h1>
                    <h2 className="calories">{props.activeItem.calories} <strong>cal</strong></h2>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailsView;