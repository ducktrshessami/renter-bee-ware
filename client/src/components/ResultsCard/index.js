import React, { Component } from "react";

export default class ResultsCard extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container" >
        <div className="row valign-wrapper">
          <div className="col s7 offset-s3 valign">
            <h3 className="header">Search Results</h3>
            <div className="card horizontal light-blue lighten-4">
              <div className="card-image">
                <img />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p className={props.name}>
                    emily
                </p>
                  <p className={props.address}>123 Main</p>
                </div>
                <div className="card-action">
                  <a href=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
