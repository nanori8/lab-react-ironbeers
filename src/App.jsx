import React from 'react';

//Importing all the views
import AllBeers from './views/AllBeers';
import RandomBeer from './views/RandomBeer';
import CreateBeer from './views/CreateBeer';
import SingleBeer from './views/SingleBeer';
import Navbar from './components/Navbar';
import Home from './views/Home';

import './App.css';
import { Link, Switch, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/beers" component={AllBeers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={CreateBeer} />
          <Route path="/:id" component={SingleBeer} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
