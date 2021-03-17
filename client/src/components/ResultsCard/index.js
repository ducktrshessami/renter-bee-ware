import React, { Component } from "react";

function ResultsCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m7">
          <h2 className="header">Horizontal Card</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/190/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
