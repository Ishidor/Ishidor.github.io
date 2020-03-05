// implement Rating component here
import React from 'react';

export default class Rating extends React.Component {
  render() {
    return (
      <p className="rating">{this.props.rating}</p>
    );
  }
}
