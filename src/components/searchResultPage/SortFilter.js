import React, { Component } from 'react';

import '../../css/components/searchResultPage/sortFilterMenu.css';

class SortFilter extends Component {
    state = { currentSelectedOption: 'top'};

    onOptionClick = (val) => {
        this.setState({currentSelectedOption: val});
    }

    getStyles = (val) => {
        let styles = "sort-filter-option";
        if(val === this.state.currentSelectedOption) {
            return styles + " selected-option";
        } else {
            return styles;
        }
    }
    
    render() {
        return (
            <div className="sort-filter">
                <div className="sort-filter-container">
                    <div className={this.getStyles('top')} onClick={() => this.onOptionClick('top')}>
                        Top Rated
                    </div>
                    <div className={this.getStyles('departure')} onClick={() => this.onOptionClick('departure')}>
                        Departure
                    </div>
                    <div className={this.getStyles('arrival')} onClick={() => this.onOptionClick('arrival')}>
                        Arrival
                    </div>
                    <div className={this.getStyles('cheapest')} onClick={() => this.onOptionClick('cheapest')}>
                        Cheapest
                    </div>
                    <div className={this.getStyles('availability')} onClick={() => this.onOptionClick('availability')}>
                        Availability
                    </div>
                </div>
            </div>
        )
    }
}

export default SortFilter;