import React from 'react';
import { Roller } from 'react-spinners-css';

import '../css/components/loader.css'

function DataLoader(props) {
    return (
        <div className="loader">
            <div className="loading-wrapper">
                <Roller />
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}

export default DataLoader
