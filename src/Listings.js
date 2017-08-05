import React, { Component } from 'react';
import axios from 'axios';

class Listings extends Component {
  constructor(props) {
      super(props);
      this.state = {
        y: 0,
        x: ''
      }
  }

  helper() {
    axios.get('http://api.giphy.com/v1/gifs/trending?limit=25&api_key=82c148f30bec4898a39c457eb6d3dc13')
    .then((response) => {
      console.log(response.data.data[0].embed_url);
      return response.data.data[0].embed_url;
    })
    .then((res) => {
      console.log(res);
      this.setState({
        y: 1,
        x: res
      })
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
          {this.state.y}
        </p>
        <p> Gif:{this.state.x}
        </p>
          <div>This is GIF IMAGE:
            <embed src={this.state.x}/>
          </div>
      </div>
    );
  }
}

export default Listings;
