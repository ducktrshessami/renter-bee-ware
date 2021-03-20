import React, {
  Component
} from 'react';
import StarRatings from 'react-star-ratings';


class StarRating extends Component {
  state = { rating: this.props.rating || 0 };

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
    if (this.props.onChange) {
      this.props.onChange(newRating);
    }
  }

  render() {
    // rating = 0;
    return (<
      StarRatings rating={
        this.state.rating
      }
      starRatedColor="#F2AF34"
      changeRating={this.props.static ? undefined : rating => this.changeRating(rating)}
      numberOfStars={5}
      starHoverColor="#C1EDFE"
      starDimension="2rem"
      name='rating' /
    >
    );
  }
}

// class Bar extends Component {
//   render() {
//     // aggregateRating = 2.35;
//     return (
//       <StarRatings
//         rating={2.403}
//         starDimension="40px"
//         starSpacing="15px"
//       />
//     );
//   }
// }

export default StarRating;