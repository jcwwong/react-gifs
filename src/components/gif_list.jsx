/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import Gif from "./gif.jsx";

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} select={this.props.select} />; // whenever do a map, must pass key which is a unique identifier
    });
  };

  render() {
    return <div className="gif-list">{this.renderList()}</div>;
  }
}

export default GifList;
