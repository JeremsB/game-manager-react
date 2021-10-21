import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import AddGame from "./pages/AddGame";
import Games from "./pages/Games";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
        <Router>
            <Route exact path='/' component={Home}/>
            <Route exact path='/add' component={AddGame}/>
            <Route exact path='/games' component={Games}/>
        </Router>
    </div>
  );

}

export default App
