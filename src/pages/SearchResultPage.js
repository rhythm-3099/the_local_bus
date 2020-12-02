import React, { Component } from 'react';

import '../css/pages/searchPage.css';
import '../css/pages/common.css';

import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-mdi/home';

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

    goToThisNavLink = (link) => {
        this.props.history.push(link);
    }

    render() {
        if(this.state.loading) {
            return (
                <div>
                    <div className="result-content">
                        <div className="search-navigator">
                            <Icon icon={homeIcon} style={{color: '#000000'}} className="search-navigator-icon" onClick={() => this.goToThisNavLink("/")}/>
                            <span className="search-navigator-divider">/</span>
                            <span className="search-navigator-text search-navigator-last-text">Search Bus</span>
                        </div>
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
                        <div className="search-navigator">
                            <Icon icon={homeIcon} style={{color: '#000000'}} className="search-navigator-icon" onClick={() => this.goToThisNavLink("/")}/>
                            <span className="search-navigator-divider">/</span>
                            <span className="search-navigator-text search-navigator-last-text">Search Bus</span>
                        </div>
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
