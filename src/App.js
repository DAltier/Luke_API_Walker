import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import SearchBar from './components/SearchBar';
import Errors from './components/Errors';
import People from './components/views/People';
import Planet from './components/views/Planet';
import Starship from './components/views/Starship';



function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Router>
        <People path = "/people/:id/" />
        <Planet path = "/planets/:id" />
        <Starship path = "starships/:id" />
        <Errors path = "/error/" />
      </Router>
    </div>
  );
}

export default App;
