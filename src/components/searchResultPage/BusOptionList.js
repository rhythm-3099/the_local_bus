import React, { Component } from 'react';

import '../../css/components/searchResultPage/busoptionlist.css';

import BusOptionCard from './BusOptionCard';




export default class BusOptionList extends Component {
    render() {
        return (
            <div className="bus-list">
                <BusOptionCard />
                <BusOptionCard />
                <BusOptionCard />
                
            </div>
        )
    }
}
