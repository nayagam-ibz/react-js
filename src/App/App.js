import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../components';
import { history } from '../helpers';
import Login from './screens/auth/login';
import Registration from './screens/auth/registration';
import ResendConfirmationMail from './screens/auth/forgot_password';
import ChangePassword from './screens/auth/change_password';
import RequestUnlock from './screens/auth/requestUnlock';
import Dashboard from './screens/dashboard/home';
import ErrorScreen from './screens/error';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/password/new' component={ResendConfirmationMail} />
        <Route path="/password/edit" component={ChangePassword} />
        <Route path="/unlock/request" component={RequestUnlock} />
        <Route path="/*" component={ErrorScreen} />
      </Switch>
    </Router>
  );
}
export { App };
