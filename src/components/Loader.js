import React from 'react';
import { Grid } from 'react-spinners-css';

import '../css/components/loader1.css';

function Loader(props) {
    return (
        <div className="loader1">
            <div className="loading-wrapper1">
                <Grid className="grid-loader"/>
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}

export default Loader
