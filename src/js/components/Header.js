import React from 'react';
import MealTimeLogo from '../svgs/mealtime-logo';
import Select from 'react-dropdown-select';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="mealtime-header">
                <div className="header-top">
                    <a className="logo-link" href="#" target="_blank">
                        <MealTimeLogo />
                    </a>
                    <div className="logo-wrapper" href="#">
                        logo here
                    </div>
                    {this.props.closeButton}
                </div>
                <div className="header-main">
                    {this.props.activeView === 'featuredView' && <p>Welcome to Burrito Boyz online ordering! Place an order for pickup below!</p>}
                    {this.props.activeview === 'featuredView' && this.props.locationSelect}
                    {this.props.activeView === 'itemDetailsView' && this.props.backButton}
                </div>
            </div>
        )
    }  
};

export default Header;