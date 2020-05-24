import React from 'react';
import FeaturedView from './FeaturedView';
import ItemDetailsView from './ItemDetailsView';

const Main = (props) => {
    return (
        <div className="mealtime-main">
            {props.activeView === 'featuredView' &&
                <FeaturedView>
                    {props.featuredMenuItems}
                </FeaturedView>
            }
            {
                props.activeView === 'itemDetailsView' &&
                <ItemDetailsView
                    activeItem={props.activeItem}
                />
            }
        </div>
    )
};

export default Main;