/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";


class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) { // cuts the step of calling render to cf virtual DOM to actual DOM
    // ie when you change searchBar value, its a changed props and therefore normally renders this
    return nextProps.id !== this.props.id; // dont call render if props.id didn't change
    // cannot do this.props !== nextProps because it compares the memory pointer so needs an actual value ie .id
  }

  handleClick = () => {
    if (this.props.select) {
      this.props.select(this.props.id);
    }
  };

  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/200.gif?cid=ecf05e473z7ueiv1l3ajfcgk11yoeim6caemiehpw3ihnqxx&amp;rid=200.gif&amp;ct=g`;
    return (
      // TO DO: add onClick function, handle the click, need function in app because state is in app and then pass it to children through props
      <img
        className="gif"
        src={src}
        onClick={this.handleClick}
        width="248"
        height="186"
        alt="backing up homer simpson GIF"
      />
    );
  }
}

export default Gif;
