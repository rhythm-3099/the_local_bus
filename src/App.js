import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import SearchResultPage from './pages/SearchResultPage';

import Scroll from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Helppage from './pages/Helppage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import FinalPage from './pages/FinalPage';
import PaymentGateway from './pages/PaymentGateway';
import Signuppage from './pages/signuppage';
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Scroll />
                    <Navbar/>
                    <Switch>
                        
                        <Route path="/" exact component={Homepage}/>
                        <Route path="/login/" component={Loginpage}/>
                        <Route path="/signup/" component={Signuppage} />
                        <Route path="/search/" component={SearchResultPage}/>
                        <Route path="/help/" component={Helppage} />
                        <Route path="/details/" component={PersonalDetailsPage} />
                        <Route path="/final/" component={FinalPage} />
                        <Route path="/payment/" component={PaymentGateway} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
