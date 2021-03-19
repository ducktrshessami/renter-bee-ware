import React, {
  Component
} from 'react';
import StarRatings from 'react-star-ratings';


class StarRating extends Component {
  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    });
  }

  state={rating: 0};
  render() {
    // rating = 0;
    return ( <
      StarRatings rating = {
        this.state.rating
      }
      changeRating = {rating => this.changeRating(rating)}
      numberOfStars = {5}
      starEmptyColor = "#C1EDFE"
      starHoverColor  = "#1277E1"
      starRatedColor = "#F2AF34"
      starDimension = "2rem"
      name = 'rating' /
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