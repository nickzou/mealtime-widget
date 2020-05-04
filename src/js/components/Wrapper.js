import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ChevronDown from '../svgs/icon-chevron_down';
import Select from 'react-dropdown-select';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            locations: [
                {label: 'Toronto', value:'Toronto'},
                {label:'London', value:'London'},
                {label:'Vancouver', value:'Vancouver'}
            ],
            activeLocation: null,
            featuredView: true,
            menuItems: [
                {
                    id: 34533,
                    name: 'Chicken Burrito',
                    description: '',
                    price: '$7.95',
                    calories: '530 - 990',
                    featured: true
                },
                {
                    id: 345363,
                    name: 'Lamb Burrito',
                    description: '',
                    price: '$7.95',
                    calories: '530 - 990',
                    featured: true
                },
                {
                    id: 345345,
                    name: 'Beef Burrito',
                    description: '',
                    price: '$7.95',
                    calories: '530 - 990',
                    featured: true
                },
                {
                    id: 3453365,
                    name: 'Bat Burrito',
                    description: '',
                    price: '$7.95',
                    calories: '530 - 990',
                    featured: false
                }
            ]
        };
        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);
        this.closeButton = <button id="button-close" className="button-icon" onClick={this.deactivate}><ChevronDown /></button>;
        this.locationSelect = <Select options={this.state.locations} onChange={(location) => this.setLocation(location)}></Select>;
    }
    activate() {
        this.setState({active: true});
    }
    deactivate() {
        this.setState({active: false});
    }
    setLocation(location) {
        this.setState({activeLocation: location});
    }
    render() {
        return (
            <div className="mealtime-wrapper">
                {!!this.state.active &&
                    <div className="mealtime-container">
                        <Header
                            closeButton={this.closeButton}
                            locationSelect={this.locationSelect}
                        />
                        <Main
                            featuredView={this.state.featuredView}
                            menuItems={this.state.menuItems}
                        />
                        <Footer />
                    </div>
                }
                <button className="button-fab" onClick={this.activate} disabled={this.state.active}>order now</button>
            </div>
        )
    }
}

export default Wrapper;