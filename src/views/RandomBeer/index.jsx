import React, { Component } from 'react';

export class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {},
    };
  }
  render() {
    return (
      <div>
        <h1>I'm random beer</h1>
      </div>
    );
  }
}

export default RandomBeer;
