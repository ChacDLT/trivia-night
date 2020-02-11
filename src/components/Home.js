import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <p>Welcome to Trivia Night</p>
    <Link to="/question/1">
      <button type="button">Start</button>
    </Link>
  </>
);

export default Home;
