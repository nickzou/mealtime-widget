import React from 'react';

const MenuItem = (props) => {
    return(
        <div className="menu-item">
            <div className="item-main-row">
                <div className="left">
                    <h2 className="item-heading">{props.name}</h2>
                </div>
                <div className="right">
                    <span className="price">{props.price}</span>
                    <span className="calories">{props.calories} <strong>cal</strong></span>
                </div>
            </div>
            <div className="item-footer-row">
                {props.addButton}
                <div className="divider"></div>
            </div>
        </div>
    )
};

export default MenuItem;