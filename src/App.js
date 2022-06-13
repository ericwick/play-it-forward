import React, { Component } from 'react';
import Nav from '../src/components/NavBar/Nav';
import Footer from '../src/components/Footer/Footer';
import './App.css';
import routes from './routes';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
