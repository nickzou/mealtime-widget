import React from 'react';

const FeaturedView = (props) => {
    return(
        <div className="mealtime-view featured-view">
            <h1 className="section-heading">Featured Items</h1>
            <div className="menu-items">
                {props.children}
            </div>
        </div>
    );
};

export default FeaturedView;