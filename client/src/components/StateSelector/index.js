import React, { Component } from 'react';
import M from "materialize-css";

// State Selector component
let states = [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ];

export default function stateSelector() {
    return(
        <select className="browser-default state-selector">
            <option value="" disabled selected>State</option>
            {states.map(state => <option value={state} key={state}>{state}</option>)}
        </select>
    )
};