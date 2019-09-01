import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './Home';

const Navbar = () => {
    return(
        <Router>
            <nav>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">Calculator</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                </ul>
                </div>

                <Route exact path="/" component={Home} />
            </nav>
        </Router>
    )
}

export default Navbar;