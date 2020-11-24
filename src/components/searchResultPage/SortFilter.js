import React from 'react';

import '../../css/components/searchResultPage/sortFilterMenu.css';

export default function SortFilter() {
    return (
        <div className="sort-filter">
            <div className="sort-filter-container">
                <div className="sort-filter-option">
                    Top Rated
                </div>
                <div className="sort-filter-option">
                    Departure
                </div>
                <div className="sort-filter-option">
                    Arrival
                </div>
                <div className="sort-filter-option">
                    Cheapest
                </div>
                <div className="sort-filter-option">
                    Availability
                </div>
            </div>
        </div>
    )
}
