import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import SearchResultPage from './pages/SearchResultPage';

import Navbar from './components/Navbar';
import Helppage from './pages/Helppage';
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/login/" component={Loginpage}/>
                    <Route path="/search/" component={SearchResultPage}/>
                    <Route path="/help/" component={Helppage} />
                </Router>
            </div>
        )
    }
}
