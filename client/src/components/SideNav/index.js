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
                    <Route path="/login">
                        <li><span className="disabled">Log In</span></li>
                        <li><Link className="active" to="/signup" onClick={() => this.clicked()}>Sign Up</Link></li>\
                        <li><Link className="active" to="/member" onClick={() => this.clicked()}>My Account</Link></li>
                        <li><Link className="active" to="/write-review" onClick={() => this.clicked()}>Write Review</Link></li>
                    </Route>
                    <Route path="/signup">
                        <li><Link className="active" to="/login" onClick={() => this.clicked()}>Log In</Link></li>
                        <li><span className="disabled">Sign Up</span></li>
                        <li><Link className="active" to="/member" onClick={() => this.clicked()}>My Account</Link></li>
                        <li><Link className="active" to="/write-review" onClick={() => this.clicked()}>Write Review</Link></li>
                    </Route>
                    <Route path="/member">
                        <li><Link className="active" to="/login" onClick={() => this.clicked()}>Log In</Link></li>
                        <li><Link className="active" to="/signup" onClick={() => this.clicked()}>Sign Up</Link></li>
                        <li><span className="disabled">My Account</span></li>
                        <li><Link className="active" to="/write-review" onClick={() => this.clicked()}>Write Review</Link></li>
                    </Route>
                    <Route path="/write-review">
                        <li><Link className="active" to="/login" onClick={() => this.clicked()}>Log In</Link></li>
                        <li><Link className="active" to="/signup" onClick={() => this.clicked()}>Sign Up</Link></li>
                        <li><Link className="active" to="/member" onClick={() => this.clicked()}>My Account</Link></li>
                        <li><span className="disabled">Write Review</span></li>
                    </Route>
                    <Route path="/">
                        <li><Link className="active" to="/login" onClick={() => this.clicked()}>Log In</Link></li>
                        <li><Link className="active" to="/signup" onClick={() => this.clicked()}>Sign Up</Link></li>
                        <li><Link className="active" to="/member" onClick={() => this.clicked()}>My Account</Link></li>
                        <li><Link className="active" to="/write-review" onClick={() => this.clicked()}>Write Review</Link></li>
                    </Route>
                </Switch>
            </ul>
        );
    }
};