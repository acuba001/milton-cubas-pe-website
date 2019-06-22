import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './components/layout/Navbar'

import Content from './components/content/Content'

import Footer from './components/layout/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Content/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
