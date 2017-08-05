import React, { Component } from 'react';
import axios from 'axios';


class Listings extends Component {

  helper() {
    axios.get('http://api.giphy.com/v1/gifs/trending?limit=25&api_key=82c148f30bec4898a39c457eb6d3dc13')
    .then(function(response) {
      console.log(response.data.data[0].url);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to Listings</h2>
        <button onClick={()=>this.helper()}>DATA FROM Giphy</button>
        <p className="App-intro">
          Listing Section
        </p>
      </div>
    );
  }
}

export default Listings;
