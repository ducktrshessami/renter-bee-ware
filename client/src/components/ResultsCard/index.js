import React, { Component } from "react";



export default function ResultsCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m7">
          <h2 className="header">Horizontal Card</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src={props.image} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className={props.cardContent}>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
              </div>
              <div className="card-action">
                <a href={props.link}></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

