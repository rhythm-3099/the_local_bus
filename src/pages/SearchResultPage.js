import React, { Component } from 'react';

import '../css/pages/searchPage.css';

import BusOptionList from '../components/searchResultPage/BusOptionList';
import SideFilter from '../components/searchResultPage/SideFilter';

import Pagination from '@material-ui/lab/Pagination';
import SortFilter from '../components/searchResultPage/SortFilter';




export default class SearchResultPage extends Component {
    render() {
        return (
            <div>
                <div className="result-content">
                    
                    <div className="box-container">
                        <div className="box1">
                            <SideFilter className="side-filter-menu"/>
                        </div>
                        <div className="box2">
                            <SortFilter />
                            <BusOptionList className="bus-list"/>
                            <Pagination count={10} variant="outlined" className="pagination"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
