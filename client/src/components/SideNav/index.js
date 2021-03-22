import React, { Component } from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import M from "materialize-css";
import "./style.css";

export default class Sidenav extends Component {
    state = { instance: null }

    componentDidMount() {
        this.setState({
            instance: M.Sidenav.init(document.getElementById("sidenav"), { edge: "right" })
        });
    }

    clicked() {
        this.state.instance.close();
    }

    render() {
        return (
            <ul id="sidenav" className="sidenav">
                <Switch>
                    <Route path="/member">
                        <li><Link to="/" onClick={() => this.clicked()}>Home</Link></li>
                        <li><span className="disabled">My Account</span></li>
                        <li><Link to="/write-review" onClick={() => this.clicked()}>New Review</Link></li>
                    </Route>
                    <Route path="/write-review">
                        <li><Link to="/" onClick={() => this.clicked()}>Home</Link></li>
                        <li><Link to="/member" onClick={() => this.clicked()}>My Account</Link></li>
                        <li><span className="disabled">New Review</span></li>
                    </Route>
                    <Route path="/">
                        <li><span className="disabled">Home</span></li>
                        <li><Link to="/member" onClick={() => this.clicked()}>My Account</Link></li>
                        <li><Link to="/write-review" onClick={() => this.clicked()}>New Review</Link></li>
                    </Route>
                </Switch>
            </ul>
        );
    }
};