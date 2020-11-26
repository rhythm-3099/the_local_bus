import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import SearchResultPage from './pages/SearchResultPage';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Helppage from './pages/Helppage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import FinalPage from './pages/FinalPage';
import PaymentGateway from './pages/PaymentGateway';
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ScrollToTop />
                    <Navbar/>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/login/" component={Loginpage}/>
                    <Route path="/search/" component={SearchResultPage}/>
                    <Route path="/help/" component={Helppage} />
                    <Route path="/details/" component={PersonalDetailsPage} />
                    <Route path="/final/" component={FinalPage} />
                    <Route path="/payment/" component={PaymentGateway} />
                </Router>
            </div>
        )
    }
}
