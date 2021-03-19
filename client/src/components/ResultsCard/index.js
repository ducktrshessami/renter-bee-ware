import React, { Component } from "react";

const placeholderImage = "https://via.placeholder.com/100";

export default class ResultsCard extends Component {
  componentDidMount() {
    // fetch("/api/")
  }

  writeReview() {
    let [street, city, state_zip, country] = this.props.address.split(",").map(part => part.trim());
    let [state, zip] = state_zip.split(" ").map(part => part.trim());
    this.props.history.push(`/write-review?street=${street}&city=${city}&state=${state}&zip=${zip}&country=${country}`);
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
                    onClick={() => this.writeReview()}
                  >
                    Write Review
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
