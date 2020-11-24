import React, { Component } from 'react';

import '../css/pages/searchPage.css';

import BusOptionList from '../components/searchResultPage/BusOptionList';
import SideFilter from '../components/searchResultPage/SideFilter';




export default class SearchResultPage extends Component {
    render() {
        return (
            <div>
                <div className="result-content">
                    
                    <div className="box1">
                        <SideFilter className="side-filter-menu"/>
                    </div>
                    <div className="box2">
                        <BusOptionList className="bus-list"/>
                    </div>
                </div>
            </div>
        )
    }
}
