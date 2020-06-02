import React, { Component } from 'react';
import SingleBeerForList from '../../components/SingleBeerForList';
import { listAllBeers } from '../../services/beerApi';

export class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
    };
  }

  componentDidMount() {
    listAllBeers()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <p>I'm the list of all beers</p>
        <SingleBeerForList />
      </div>
    );
  }
}

export default AllBeers;

// this component is loaded when created the app
// all beers have one component for each beer
// this holds in state the info of all beers: constructor with all beers empty. call from the API is empty at first
