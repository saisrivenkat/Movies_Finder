import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Overview from './Components/Overview'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Switch>
          <Route component={Header} path="/Movies" />
          <Route component={Overview} path="/overview" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
