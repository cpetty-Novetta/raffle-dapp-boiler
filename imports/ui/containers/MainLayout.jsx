import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Register from '../components/Register.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}
