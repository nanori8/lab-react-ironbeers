import React, { Component } from 'react';

export class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      singleBeer: {},
    };
  }
  render() {
    return (
      <div>
        <p>I'm a single beer</p>
      </div>
    );
  }
}

export default SingleBeer;
