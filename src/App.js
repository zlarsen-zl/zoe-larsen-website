import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
