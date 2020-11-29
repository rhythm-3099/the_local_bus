import React, { Component } from 'react';

import '../../css/components/searchResultPage/busoptionlist.css';

import BusOptionCard from './BusOptionCard';




export default class BusOptionList extends Component {
    render() {
        return (
            <div className="bus-list">
                <BusOptionCard 
                    busName="1900SRTNKTACSLP"
                    busType="AC, Sleeper"
                    rating="4.3"
                    from="Surat"
                    to="Ahd."
                    duration="05H 11M"
                    origin="Surat Central Bus Station"
                    destination="Nakhtrana"
                    price={390}
                    via="Baroda Amdavad Gandhidham Bhuj"
                    seatsAvailable={15}
                    fromTime="11:15 PM"
                    toTime="4:10 AM"
                />
                <BusOptionCard 
                    busName="2600RHYTHMPATEL"
                    busType="AC, Sleeper, Volvo"
                    rating="4.1"
                    from="Surat"
                    to="Ahd."
                    duration="05H 55M"
                    origin="Katargam Bus Station"
                    destination="Ghatlodia"
                    price={450}
                    via="Baroda Amdavad Gandhidham Bhuj"
                    seatsAvailable={8}
                    fromTime="10:15 AM"
                    toTime="4:10 PM"
                />
                <BusOptionCard 
                    busName="7687KAIBIBUSLML"
                    busType="AC, Seater"
                    rating="3.8"
                    from="Surat"
                    to="Ahd."
                    duration="05H 30M"
                    origin="Nana Varachha "
                    destination="Judges Bunglows"
                    price={425}
                    via="Baroda Amdavad Gandhidham Bhuj"
                    seatsAvailable={35}
                    fromTime="12:15 PM"
                    toTime="5:45 PM"
                />
            </div>
        )
    }
}
