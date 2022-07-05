/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */

import giphyApi from "giphy-api";
import React, { Component } from "react";

import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";
import config from "../../config.js";


class App extends Component {
  constructor(props) { // to add a astate need a constructor
    super(props);

    this.state = { // parts that will change during the lifetime of the app
      // gifs
      gifs: [],
      // selected gif
      selectedGifId: "a93jwI0wkWTQs",
    };
    this.search('random');
    this.select = this.select.bind(this);
  }

  search = (query) => {
    // TODO: API call
    giphyApi(`${config.MY_API_KEY}`).search({ // api key
      q: query,
      limit: 16,
      rating: 'g'
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  select = (id) => {
    this.setState({
      selectedGifId: id,
    });
  }

  render() {
    // const gifs = [
    //   { id: "a93jwI0wkWTQs" },
    //   { id: "xT5LMBauOi9MgA50L6" }
    // ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          {/* passing a function search as a props so the searchBar can use it */}
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} select={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
