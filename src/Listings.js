import React, { Component } from 'react';
import axios from 'axios';

class Listings extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list: [],
        searchString: ''
      }
  }

  handleType(e) {
    let input = e.target.value;
    let parsed = input.split(' ').join('+');
    this.setState({
      searchString: parsed
    })
  }

  getGifs(input) {
    console.log(input);
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=82c148f30bec4898a39c457eb6d3dc13`)
    .then((res) => {
      // console.log(res.data.data[0].embed_url);
      // return res.data.data[0].embed_url;
      return res.data;
    })
    .then((res) => {
      console.log(res);
      let tempList = [];
      for (let i = 0; i < res.data.length-15; i++) {
        tempList.push(res.data[i].embed_url);
      }
      this.setState({
        list: tempList
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
        <input id="textBox"
          type='text'
          name='search'
          placeholder="Search for GIFs"
          value = {this.state.searchText}
          onChange={(e)=>this.handleType(e)}/>
        <button onClick={()=>this.getGifs(this.state.searchString)}>DATA FROM Giphy</button>
        <p className="App-intro">
          Listing Section
        </p>
          <div>This is GIF IMAGE:
            {this.state.list.map(url => <embed key={url} src={url}/>)}
          </div>
      </div>
    );
  }
}

export default Listings;
