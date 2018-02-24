import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor() {
    super();
    this.state = {
      style: {}
    };
  }

  handleScroll(event) {
    console.log(event.target.scrollTop);

    let scrolled = 0;
    const segmentHeight = 200;


    const segmentStart = 0;
    const segmentEnd = segmentStart + segmentHeight;

    const scrollTop = event.target.scrollTop;

    let style = {};
    if (scrollTop < 1500) {
    } else if (scrollTop < 1700) {
      style = {
        transform: `translateY(${(scrollTop - 1500) / 2}px)translateY(-50%)`
      }
    } else if (scrollTop < 2000) {
      style = {
        transform: 'translateY(100px)translateY(-50%)'
      }
    } else if (scrollTop < 2200) {
      style = {
        transform: `translateY(${(scrollTop - 2000 + 200) / 2}px)translateY(-50%)`
      }
    } else {
      style = {
      }
    }
    this.setState({ style });
  }


  render() {
    return (
      <div id="app">
        <div className="long" onScroll={this.handleScroll.bind(this)} id="onscroll">
          <div className="long-container">
            <div className="segment">
              <div className="text" style={this.state.style} id="styled">
                Text
                  </div>
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default App;
