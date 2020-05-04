import React from 'react';
import FeaturedView from './FeaturedView';
import MenuItem from './MenuItem';

const Main = (props) => {
    return (
        <div className="mealtime-main">
            {props.featuredView &&
                <FeaturedView>
                    {props.menuItems.map((item, index) => {
                        if(!!item.featured){
                            return <MenuItem
                                key={index}
                                name={item.name}
                                price={item.price}
                                calories={item.calories}
                            />
                        }
                    })}
                </FeaturedView>
            }
        </div>
    )
};

export default Main;