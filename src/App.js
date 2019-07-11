import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// Pages container
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import RegAndAuth from './pages/reg-and-auth/RegAndAuth'

// Components
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={RegAndAuth} />
      </Switch>
    </div>
  );
}

export default App;
