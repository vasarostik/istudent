import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import "mdbreact/dist/css/mdb.css";
import Main from './pages/Main';
import {Registration} from './pages/Registration';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Main}/>
    <Route path="/registration/student" component={Registration}/>
    <Route path="/registration/company" component={Registration}/>
    <Route path="/registration/student/profile" component={Registration}/>
    <Route path="/registration/company/profile" component={Registration}/>
  </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
