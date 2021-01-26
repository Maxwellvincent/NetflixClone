/* eslint-disable prettier/prettier */
/* eslint-disable import/named */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, Browse, Signup, Signin} from './pages';
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home/>
      </Route>
    </Router>
 )
}
