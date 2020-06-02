import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>I'm the Home page</h1>
      <Link to="/beers"> All Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new">New Beer</Link>
    </div>
  );
}

export default Home;
