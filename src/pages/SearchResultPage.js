import React, { Component } from 'react';

import '../css/pages/searchPage.css';

import BusOptionList from '../components/searchResultPage/BusOptionList';
import SideFilter from '../components/searchResultPage/SideFilter';

import Pagination from '@material-ui/lab/Pagination';
import SortFilter from '../components/searchResultPage/SortFilter';
import SearchMenu from '../components/searchResultPage/SearchMenu';

import Loader from '../components/Loader';




export default class SearchResultPage extends Component {
    state = {loading: true};

    sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
        this.setState({
            loading: false
        });
    };

    componentDidMount() {
        this.wait(2500);
    }

    render() {
        if(this.state.loading) {
            return (
                <div>
                    <div className="result-content">
                        <SearchMenu />
                        <div className="box-container">
                            <div className="box1">
                                <SideFilter className="side-filter-menu"/>
                            </div>
                            <div className="box2">
                                <Loader text="Loading the results"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="result-content">
                        <SearchMenu />
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
}
