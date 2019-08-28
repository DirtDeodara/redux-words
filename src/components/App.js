import React from 'react';
import TopWords from '../containers/TopWords';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Searchable from './pages/Searchable';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/words/:count" component={Searchable}/>
        <Route exact path="/" component={TopWords}/>
      </Switch>
    </Router>
   
  );
}
