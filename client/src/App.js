import React, { Component, useEffect } from 'react';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Strategie from './Components/Strategie';
import Commande from './Components/Commande';
import Fournisseurs from './Components/Fournisseurs';
import Process from './Components/Process';
import Valeurs from './Components/Valeurs';
import Connexion from './Components/Connexion';
import Inscription from './Components/Inscription';
import Argent from './Components/Argent';
import Alert from './Components/Alert';
import PrivateRoute from './Components/Private/Privateroute';


//Redux

import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';




const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header></Header>
    <Route path="/" exact component={Inscription}  />
    <Route path="/Fournisseurs" exact component={Fournisseurs}/>
    <Route path="/Strategie" exact component={Strategie}/>
    <Route path="/Commande" exact component={Commande}/>
    <Route path="/Process" exact component={Process}/>
    <Route path="/Valeurs" exact component={Valeurs}/>
    <PrivateRoute path="/Argent" exact component={Argent}/>
    <Alert />
    <Switch>
    <Route path="/Connexion" exact component={Connexion}/>
    <Route path="/Inscription" exact component={Inscription}/>
    </Switch>
    </div>
    </Router>
    </Provider>
  );

};

export default App;
