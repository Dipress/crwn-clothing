import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// Pages container
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
