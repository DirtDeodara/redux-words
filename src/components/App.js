import React from 'react';
import TopWords from '../containers/TopWords';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/words/:count" component={TopWords}/>
        <Route exact path="/" component={TopWords}/>
      </Switch>
    </Router>
   
  );
}
