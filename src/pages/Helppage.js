import React, { Component } from 'react';

import '../css/pages/helppage.css';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Helppage extends Component {
    render() {
        return (
            <div className="helppage">
                <div className="helppage-wrapper">
                    <h1>Some of the frequently asked questions</h1>
                    <div className="accordion-wrapper">
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>1. What are the advantages of purchasing an Advance Reservation bus ticket with GSRTC?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>GSRTC is the only Govt. State Transport undertaking corporation in Gujarat. 
                                    GSRTC offers variety of services. 
                                    There are several advantages of advance reservation with 
                                    GSRTC, such as:
                                </p>
                                <ul>
                                    <li>
                                        You can choose your seat
                                    </li>
                                    <li>
                                        You can book your bus tickets through internet, using GPRS enabled Mobile, or in person at your nearest counter of our wide spread franchisee network chain and GSRTC booking counters
                                    </li>
                                    <li>
                                        Choice based on boarding points, timing and bus type
                                    </li>
                                    <li>
                                        Provision of relief vehicle in case of bus break down
                                    </li>
                                    <li>
                                        Providing safe journey with statutory speed limits and skilled drivers
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>2. Can I Prepone or Postpone already booked Advance tickets?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>Yes, you can Prepone/Postpone (Reschedule) of your Advance Booked Ticket.</p>
                                <p><b>Terms & conditions on Prepone /Postpone (Reschedule) of Booking.</b></p>
                                <ul>
                                    <li>
                                        From 16-01-2014 GSRTC had reduced reservation charges for Luxury, Sleeper, AC and Volvo services.
                                    </li>
                                    <li>
                                        Reservation Charges for online & mobile booking is Rs. 5/-.
                                    </li>
                                    <li>
                                        Reservation Charges are not applicable for Tickets booked under Current Booking Mode.
                                    </li>
                                    <li>
                                        Services will be available for 60 days advance booking. Trip sheet will be prepared before 30 minutes of departure time.
                                    </li>
                                    <li>
                                        Passengers are allowed to book the tickets till the preparation of the trip sheet.
                                    </li>
                                    <li>
                                        Passengers are allowed to do Current Booking Transactions after the printing of the Trip Sheets and Seats are not assured for Tickets booked under Current Booking Mode with no extra reservation charges.
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>3. Can I book Journey started bus or already In-transition buses?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    Yes, you can book through Current Booking option in our Mobile Apps. Seats are not assured and Cancellation not allowed for current booking tickets.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>4. Can I Track my Bus and view on live Maps?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    Yes, you can Track your bus through Track My Bus link and you can view exact location of your bus in map.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>
                                    5. Do I need to register a user account with GSRTC to book online (e-ticket)?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    No, you can book as Guest User in all Booking modes.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>6. Does booking online (e-ticket) cost me more?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    No, e-ticket booking does not include any additional charges. It will cost as much as you buy a reservation ticket from the counter.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>7. Amount debited but ticket is not confirmed (failed transaction), what should I do?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    Please send e-mail to erefund@mail1.gsrtc.in, 
                                    mentioning e-ticket reference number or use rid 
                                    registered with GSRTC and date of transaction. 
                                    Reference number pops up on clicking the button 
                                    “Make payment”. User is supposed to note the displayed 
                                    reference no. starting with GS. In case of success 
                                    transactions reference number can be found at 
                                    'View-E-Ticket Booking History' when you login to 
                                    e-ticket booking.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>8. Is there any contact no. for any queries regarding e-ticketing?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    Yes, GSRTC has established a helpdesk with (24 X 7) tall free no. 1800 233 666666. Passengers can call anytime for any difficulties or queries regarding advance reservation.
                                </p>
                                <ol>
                                    <li>
                                        SLP15 represents sleeper service and birth nos.
                                    </li>
                                    <li>
                                        SLP30 represents seating service and seat nos.
                                    </li>
                                    <li>
                                        1925SRTRJTSLP30 Means Seating Service.
                                    </li>
                                    <li>
                                        1925SRTRJTSLP15 Means Sleeper Service.
                                    </li>
                                </ol>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>9. Does booking through mobile cost me more?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    No, mobile booking does not include any additional charges. It’s a free service.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>10. Does booking at GSRTC franchisee (Agency) counters cost me more?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    No! The fare remains same in GSRTC owned counters and franchisee counters.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>11. Is it mandatory to carry ID proof for e-ticket?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    Yes. It is a compulsory to carry photo ID proof. Passenger is supposed to produce it at the time of boarding to conductor and to any authorized GSRTC staff during journey.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>12. What are the age criteria for child fare?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <ul>
                                    <li>
                                        Free ticket for 0-4 year’s child.
                                    </li>
                                    <li>
                                        Half ticket for age 5 to 11 years child.
                                    </li>
                                    <li>
                                        Full ticket for age greater than 12.
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>13. I've lost my ticket. What do I do now?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    If it is e-ticket / M-ticket you can get it through Print /SMS Ticket link on Homepage and produce it at the time of boarding.    
                                </p>
                                <p>
                                    Passenger have to buy a new ticket if the ticket has been purchased from the GSRTC counters or franchisee counters as passenger has to buy a new ticket if the ticket is lost.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>14. I have booked e-ticket in my name can someone else travel in the ticket?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    No, Ticket is not transferable.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>15. What are the options for the online payment?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    Any VISA / Master Debit / Credit card can be used for the payment. You can also make payment via net banking service.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>16. Discount Policy?</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                    <b>
                                        Implementation of Discount Policies in OPRS application
                                    </b>
                                </p>
                                <ul>
                                    <li>
                                        GSRTC facilitates discounts of 10% on return journey and 5% for group booking (>= 4 Seats) for tickets booked before 6 hours prior to departure of service from the origin place.
                                    </li>
                                    <li>
                                        8% discount on Express, Gurjarnagri & Non AC Sleeper & Seaters. 10% discount on Volvo & AC Sleeper & Seater booking for all e & M Booking transactions (from 01/07/2019 onwards).
                                    </li>
                                    <li>
                                        <b>
                                            At any instance “SINGLE DISCOUNT” will be applicable on valid booking tickets i.e. whichever discount is higher.
                                        </b>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>17. Phone Booking</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                Who Can Book?
Any once can block Seats desired in any class of service before 48 Hours of Service Departure from Its originating point except concessional tickets.

How Can I Book?
Can call GSRTC Toll Free Number 1800-233-666666 IVR Extension between 8AM to 8PM every day.

How many seats can I Book/block at once?
You can block 5 seats at a time.

Whether I am getting any confirmation from GSRTC for Phone booking made?
Yes, you will received a confirmation SMS from GSRTC with Phone Booking reference number.

How can I get Ticket Copy for the Phone booking made?
You should take print in your nearest GSRTC Reservation counter by producing the Phone Booking Reference number to the GSRTC staff, and GSRTC Reservation staff will collect the fare and will give you your GSRTC Authorized ticket copy.

What will happen In Case ticket not collected?
You should take the Ticket copy 5 hours before service Departure from Its originating point, if not taken phone booking seats will be released to General public and can be booked by passenger through any other modes.

Who can book through Phone Booking?
Only General Public can book through it.

Are there any extra charges for Phone Booking?
NO, GSRTC will not collect any extra fare for Phone booking.

What are the fare charges applicable for Phone Booking?
All applicable charges as per the advance booking policies

Is Phone booking ticket is transferable?
No, Phone booking tickets are nontransferable.

Can I cancel Phone booking ticket?
Yes, once ticket generated at GSRTC counter, tickets are cancellable as per GSRTC Terms & conditions and booking policies.

Is there any way, I can pay the charges online for phone booking made?
Currently we do not have such service. Coming soon…
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>18. Link Service</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                How Link Service will work?
Where GSRTC will not run direct service, user will be suggested with possible short distance to reach his/her destination.

How Services will be listed in site?
You have to search from place to place in the e booking site, if the service is not available system will automatically provide the option to search for link service. The passenger has to enter the preferable via place to reach the destination. The system will display two onward journey availability lists one from origin to via place and second one from via place to destination. The passenger can select the desired two services to reach the destination. The system will print two tickets after making the necessary payment.

How much time gap will be there between break places?
There will be minimum 2 hours gap will be there break place.

Is there any extra fare collected for Link Service mode booking?
No, fares will be calculated as per online booking terms & conditions.

Are the Link service tickets are transferrable?
Link service booked tickets are non-transferable.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="help-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            >
                                <Typography>19. Waiting List</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="param-content">
                                <p>
                                How can I book a waiting list ticket?
Incase service is full, you wish to travel in your desired bus, you can book wait listing ticket. You will be given WL1, WL 2.. etc., seat numbers.

How much I should pay for the waiting list ticket?
You need to pay Full Fare as per Online booking policy while booking waiting list ticket.

How I will get seat confirmation on waiting list ticket?
Currently, you will get seat confirmation against ticket cancellation made by other passengers. Seats will be allotted in First IN cum First Service basis.

Should I get any confirmation on booking of Waiting List ticket?
Yes, you will be getting a SMS and confirmation Email to your registered Email ID and mobile number on booking of waiting list ticket.

How can I know Waiting List Seat Status?
GSRTC will send Confirmed / Un-confirmed seat position will be sent to your Mobile number via SMS and Email 3 hours before from the schedule departure of the bus from its originating point.

Or

You can also check the status through www.gsrtc.in website.

Shall I get 100% refund incase waiting list ticket not confirmed?
Yes, if seat not allotted on your waiting list ticket, after bus departed from its originating point, your waiting listed ticket gets cancelled automatically and refund will be processed to you.
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}
