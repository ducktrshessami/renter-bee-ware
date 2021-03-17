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
                    <Route path="/portfolio">
                        <li><Link to="/" onClick={() => this.clicked()}>About Me</Link></li>
                        <li><span className="disabled">Portfolio</span></li>
                        <li><Link to="/contact" onClick={() => this.clicked()}>Contact</Link></li>
                    </Route>
                    <Route path="/contact">
                        <li><Link to="/" onClick={() => this.clicked()}>About Me</Link></li>
                        <li><Link to="/portfolio" onClick={() => this.clicked()}>Portfolio</Link></li>
                        <li><span className="disabled">Contact</span></li>
                    </Route>
                    <Route path="/">
                        <li><span className="disabled">About Me</span></li>
                        <li><Link to="/portfolio" onClick={() => this.clicked()}>Portfolio</Link></li>
                        <li><Link to="/contact" onClick={() => this.clicked()}>Contact</Link></li>
                    </Route>
                </Switch>
            </ul>
        );
    }
};