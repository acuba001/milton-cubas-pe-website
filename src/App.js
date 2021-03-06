import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/content/Home'
import WhoWeAre from './components/content/WhoWeAre'
import WhatWeDo from './components/content/WhatWeDo'
import OurProjects from './components/content/OurProjects'
import ContactUs from './components/content/ContactUs'

import ACAluminumStand from './components/designs/ACAluminumStand/ACAluminumStand'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/who-we-are" component={WhoWeAre}/>
        <Route exact path="/what-we-do" component={WhatWeDo}/>
        <Route exact path="/our-projects" component={OurProjects}/>
        <Route exact path="/contact-us" component={ContactUs}/>
        <Route exact path="/a-c-aluminum-stand-design" component={ACAluminumStand}/>
      </Switch>
    </Router>
  );
}

export default App;
