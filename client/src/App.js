import React, { Component } from 'react';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Strategie from './Components/Strategie';
import Commande from './Components/Commande';
import Fournisseurs from './Components/Fournisseurs';
import Process from './Components/Process';
import Valeurs from './Components/Valeurs';
import Connexion from './Components/Connexion';
import Argent from './Components/Argent';



class App extends Component {
  render (){
  return (
    <Router>
    <div className="App">
    <Header></Header>
    <Route path="/" />
    <Route path="/Fournisseurs" exact component={Fournisseurs}/>
    <Route path="/Strategie" exact component={Strategie}/>
    <Route path="/Commande" exact component={Commande}/>
    <Route path="/Process" exact component={Process}/>
    <Route path="/Valeurs" exact component={Valeurs}/>
    <Route path="/Argent" exact component={Argent}/>
    <Route path="/Connexion" exact component={Connexion}/>
    </div>
    </Router>
  );
}
}

export default App;
