import React from 'react';
import Header from './Header';
import Main from './Main';
import MenuItem from './MenuItem';
import Footer from './Footer';
import ChevronDown from '../svgs/icon-chevron_down';
import ChevronLeft from '../svgs/icon-chevron_left';
import Select from 'react-dropdown-select';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            locations: [
                {label: 'Toronto', value:'toronto'},
                {label:'London', value:'london'},
                {label:'Vancouver', value:'vancouver'}
            ],
            activeLocation: null,
            activeView: 'featuredView',
            previousView: '',
            menuItems: [
                {
                    id: 34533,
                    name: 'Chicken Burrito',
                    description: 'This is a description',
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
                    name: 'Shrimp Burrito',
                    description: '',
                    price: '$7.95',
                    calories: '530 - 990',
                    featured: false
                }
            ],
            activeItem: null
        };
        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);
        this.viewChange = this.viewChange.bind(this);
        this.addAction = this.addAction.bind(this);
        this.back = this.back.bind(this);
        this.closeButton = <button id="button-close" className="button-icon" onClick={this.deactivate}><ChevronDown /></button>;
        this.backButton = <button id="button-back" className="button-small pill fill indigo button-back" onClick={()=>this.back(this.state.activeView, this.state.previousView)}><ChevronLeft /> back</button>
        this.locationSelect = <Select options={this.state.locations} onChange={(location) => this.setLocation(location)}></Select>;
        this.menuItems = this.state.menuItems.map((item, index) => { return <MenuItem key={index} name={item.name} price={item.price} calories={item.calories} addButton={<button className="button-small pill fill blue button-add" onClick={()=>this.addAction(item)}>add</button>} />});
        this.featuredMenuItems = this.state.menuItems.map((item, index) => { if(!!item.featured) {return <MenuItem key={index} name={item.name} price={item.price} calories={item.calories} addButton={<button className="button-small pill fill blue button-add" onClick={()=>this.addAction(item)}>add</button>} />}});
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
    viewChange(activeView) {
        this.setState({
            previousView: activeView
        });
    }
    addAction(item) {
        this.viewChange(this.state.activeView);
        this.setState({
            activeView: 'itemDetailsView',
            activeItem: item
        });
    }
    back(activeView, previousView) {
        this.setState({
            activeView: previousView,
            previousView: activeView
        });
    }
    render() {
        return (
            <div className="mealtime-wrapper">
                {!!this.state.active &&
                    <div className="mealtime-container">
                        <Header
                            closeButton={this.closeButton}
                            locationSelect={this.locationSelect}
                            activeView={this.state.activeView}
                            backButton={this.backButton}
                        />
                        <Main
                            activeView={this.state.activeView}
                            featuredMenuItems={this.featuredMenuItems}
                            activeItem={this.state.activeItem}
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