import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customer from "./pages/Customer";
import Dispatch from "./pages/Dispatch";
// import { Map } from "./pages/Map";


import React, { Component } from 'react';

// import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import Card from './components/Card';
import CardBtn from './components/CardBtn';
import Hero from './components/Hero';
import Geolocated from './components/Geolocation';


import './App.css';

const App = () => {


  return (


    < div >
      <Router>


        <Switch>
          <Route exact path="/" component={Customer} />
          <Route exact path="/dispatch" component={Dispatch} />
          {/* <Route exact path="/map" component={Map} /> */}
        </Switch>

      </Router>



    </ div>

  )

}

export default App;

