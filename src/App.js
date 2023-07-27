import './App.css'
import React from 'react'
import Header from './components/common/header/Header'
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepages from './components/home/Homepages';
import Footer from './components/common/footer/Footer';
import Football from './components/football/Football';
import Basketball from './components/basketball/Basketball';
import Singlepages from './components/singlePages/Singlepages';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {<Route exact path='/' component={Homepages} />}
          {<Route exact path='/singlepage/:id' component={Singlepages} />}
          {<Route exact path='/football' component={Football} />}
          {<Route exact path='/basketball' component={Basketball} />}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App