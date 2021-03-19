import React, { Component } from "react";

const placeholderImage = "https://via.placeholder.com/100";

export default class ResultsCard extends Component {
  componentDidMount() {
    // fetch("/api/")
  }

  render() {
    return (
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col s7 offset-s3 valign">
            <h3 className="header">Search Results</h3>
            <div className="card horizontal light-blue lighten-4">
              <div className="card-image">
                <img src={this.props.photo || placeholderImage} alt={this.props.name} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{this.props.name}</p>
                  <p>{this.props.address}</p>
                </div>
                <div className="card-action">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Write Review
                  <i className="material-icons right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
