import React from 'react';
import './App.css';

import Chips from './Chips';
import Cookies from './Cookies';
import Candy from './Candy';
import VendingMachine from './VendingMachine';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/cookies">
          <Cookies />
        </Route><Route exact path="/candy">
          <Candy />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
