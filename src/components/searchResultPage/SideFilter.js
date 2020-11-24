import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

import '../../css/components/searchResultPage/sideFilter.css';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Icon, InlineIcon } from '@iconify/react';
import currencyInr from '@iconify/icons-mdi/currency-inr';

import Slider from '@material-ui/core/Slider';

export default class SideFilter extends Component {

    state = {
        priceVal: [241, 1080],
        durationVal: [180, 480],
        departureVal: [0, 1439]
    
    }

    priceChangeHandler = (e, newVal) => {
        this.setState({priceVal: newVal});
    }

    departureChangeHandler = (e, newVal) => {
        this.setState({departureVal: newVal})
    }

    durationValueChangeHandler = (e, newVal) => {
        this.setState({durationVal: newVal});
    }

    getDepartureLabels = () => {
        let departureSection = null;
        let departureStarting = "";
        let departureEnding = "";

        let startingHours = Math.floor(this.state.departureVal[0] / 60);
        let startingMins = this.state.departureVal[0] % 60;

        let endingHours = Math.floor(this.state.departureVal[1] / 60)
        let endingMins = this.state.departureVal[1] % 60;

        if(this.state.departureVal[0] < 720) {
            if(startingHours < 10){
                departureStarting = "0";
            } 
            if(startingMins < 10){
                departureStarting += startingHours + ":0" + startingMins + " AM"; 
            } else {
                departureStarting += startingHours + ":" + startingMins + " AM"; 
            }
            
        } else {
            if(startingHours < 10){
                departureStarting = "0";
            } 
            if(startingMins < 10){
                departureStarting += startingHours + ":0" + startingMins + " PM"; 
            } else {
                departureStarting += startingHours + ":" + startingMins + " PM"; 
            }
        }

        if(this.state.departureVal[1] < 720) {

            if(endingHours < 10){
                departureEnding = "0";
            } 
            if(endingMins < 10){
                departureEnding += endingHours + ":0" + endingMins + " AM"; 
            } else {
                departureEnding += endingHours + ":" + endingMins + " AM"; 
            }
        } else {
            if(endingHours < 10){
                departureEnding = "0";
            } 
            if(endingMins < 10){
                departureEnding += endingHours + ":0" + endingMins + " PM"; 
            } else {
                departureEnding += endingHours + ":" + endingMins + " PM"; 
            }
        }

        departureSection = (
            <div className="departureDateLabels">
                <div className="departureDateLabel-item">
                    <h4>{departureStarting}</h4>
                </div>
                <div className="departureDateLabel-item">
                    <h4>{departureEnding}</h4>
                </div>
            </div>
        )

        return departureSection;
    }

    getDurationLabels = () => {
        let durationStarting = "";
        let durationEnding = "";
        let durationSection = null;

        let startingHours = Math.floor(this.state.durationVal[0] / 60);
        let startingMins = this.state.durationVal[0] % 60;

        let endingHours = Math.floor(this.state.durationVal[1] / 60);
        let endingMins = this.state.durationVal[1] % 60;

        durationStarting = startingHours + " hours " + startingMins + " mins";
        durationEnding = endingHours + " hours " + endingMins + " mins";

        durationSection = (
            <div className="departureDateLabels">
                <div className="departureDateLabel-item">
                    <h4>{durationStarting}</h4>
                </div>
                <div className="departureDateLabel-item">
                    <h4>{durationEnding}</h4>
                </div>
            </div>
        )
        return durationSection;
    }

    render() {
        return (
            <div className="filter-menu">
                <div className="filter-menu-wrapper">
                <div>
                    <h2 className="center-hor">Enhance Results</h2>
                    <Accordion defaultExpanded className="accordian">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        
                        >
                            <Typography>Departure Time</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="param-content">
                        
                            <Slider
                                value={this.state.departureVal}
                                onChange={this.departureChangeHandler}
                                
                                min={0}
                                max={1439}
                            />
                            {this.getDepartureLabels()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded className="accordian">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography >Price</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="param-content">
                            <Slider
                                value={this.state.priceVal}
                                onChange={this.priceChangeHandler}
                                min={241}
                                max={1080}
                            />
                            <div className="priceLabels">
                                <div className="priceLabel-item">
                                    <Icon icon={currencyInr} style={{color: '#000000'}} className="param-inr"/>
                                    <h4>{this.state.priceVal[0]}</h4>
                                </div>
                                <div className="priceLabel-item">
                                    <Icon icon={currencyInr} style={{color: '#000000'}} className="param-inr"/>
                                    <h4>{this.state.priceVal[1]}</h4>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded className="accordian">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Travel Duration</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="param-content">
                            <Slider
                                value={this.state.durationVal}
                                onChange={this.durationValueChangeHandler}
                                min={180}
                                max={480}
                            />
                            {this.getDurationLabels()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="accordian">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Bus Type</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="radio-element-wrapper">
                                <div className="radio-element">
                                    <input type="checkbox" id="bus_type_1" name="bus_type_1" value="AC Sleeper" />
                                    <label for="bus_type_1">AC Sleeper</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="bus_type_2" name="bus_type_2" value="Seater" />
                                    <label for="bus_type_2">Seater</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="bus_type_3" name="bus_type_3" value="Semi Sleeper" />
                                    <label for="bus_type_3">Semi Sleeper</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="bus_type_4" name="bus_type_4" value="Sleeper" />
                                    <label for="bus_type_4">Sleeper</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="bus_type_5" name="bus_type_5" value="Gurjarnagari" />
                                    <label for="bus_type_5">Gurjarnagari</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="bus_type_6" name="bus_type_6" value="Express" />
                                    <label for="bus_type_6">Express</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="bus_type_7" name="bus_type_7" value="Volvo" />
                                    <label for="bus_type_7">Volvo</label>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordian">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Bus Rating</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="radio-element-wrapper">
                                <div className="radio-element">
                                    <input type="checkbox" id="rating_type_1" name="rating_type_1" value="All" />
                                    <label for="rating_type_1">All</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="rating_type_2" name="rating_type_2" value="5" />
                                    <label for="rating_type_2">5</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="rating_type_3" name="rating_type_3" value="4" />
                                    <label for="rating_type_3">4 +</label>
                                </div>
                                <div className="radio-element">
                                    <input type="checkbox" id="rating_type_4" name="rating_type_4" value="3" />
                                    <label for="rating_type_4">3 +</label>
                                </div>
                                
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordian">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Ameneties</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="radio-element-wrapper-amen">
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_1" name="amen_type_1" value="Live Tracking" />
                                    <label for="amen_type_1">Live Tracking</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_2" name="amen_type_2" value="Wifi" />
                                    <label for="amen_type_2">Wifi</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_3" name="amen_type_3" value="Washroom" />
                                    <label for="amen_type_3">Washroom</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_4" name="amen_type_4" value="Blanket" />
                                    <label for="amen_type_4">Blanket</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_5" name="amen_type_5" value="Reading Light" />
                                    <label for="amen_type_5">Reading Light</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_6" name="amen_type_6" value="First Aid" />
                                    <label for="amen_type_6">First Aid</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_7" name="amen_type_7" value="Fan" />
                                    <label for="amen_type_7">Fan</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_8" name="amen_type_8" value="Hand Sanitizer" />
                                    <label for="amen_type_8">hand Sanitizer</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_9" name="amen_type_9" value="Fire Extinguisher" />
                                    <label for="amen_type_9">Fire Extinguisher</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_10" name="amen_type_10" value="Charging Point" />
                                    <label for="amen_type_10">Charging Point</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_11" name="amen_type_11" value="Newspaper" />
                                    <label for="amen_type_11">Newspaper</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_12" name="amen_type_12" value="Pillow" />
                                    <label for="amen_type_12">Pillow</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_13" name="amen_type_13" value="Snacks" />
                                    <label for="amen_type_13">Snacks</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_14" name="amen_type_14" value="Water Bottles" />
                                    <label for="amen_type_14">Water Bottles</label>
                                </div>
                                <div className="radio-element-amen">
                                    <input type="checkbox" id="amen_type_15" name="amen_type_15" value="No Stop" />
                                    <label for="amen_type_15">No Stop</label>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}
