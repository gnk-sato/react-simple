import Home  from 'home.jsx';
import React from 'react';
import { Router, Route, Link } from 'react-router';

class Root extends React.Component {
    render() {
        return (
            <div>
                <div className="mycontainer">
                    <p>home</p>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const AppRoutes = (
    <Router>
        <Route path="/" component={Root}>
            <Route path="home" component={Home} />
        </Route>
    </Router>
);

module.exports = AppRoutes;
