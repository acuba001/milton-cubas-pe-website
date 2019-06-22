import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'

import Home from './components/content/Home'
import WhoWeAre from './components/content/WhoWeAre'
import WhatWeDo from './components/content/WhatWeDo'
import OurProjects from './components/content/OurProjects'
import ContactUs from './components/content/ContactUs'

import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/who-we-are" component={WhoWeAre}/>
        <Route exact path="/what-we-do" component={WhatWeDo}/>
        <Route exact path="/our-projects" component={OurProjects}/>
        <Route exact path="/contact-us" component={ContactUs}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
