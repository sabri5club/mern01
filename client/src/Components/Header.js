import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Style/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header class="hero">
        <div id="navbar" class="navbar">
            <div>
            <h1 class="">Sookandco</h1>
            <h2>Nouvelle Dashboard</h2>
            </div>
            <i class="fa fa-bars" aria-hidden="true"></i>
            <nav>
                <ul>
                   <Link style={{textDecoration:"none"}} to="/">
                    <li><a href="accueil">Accueil</a> </li>
                    </Link>
                    <Link to="/Strategie">
                    <li><a href="tratégie">Stratégie</a></li>
                    </Link>
                    <Link to="/Fournisseurs">
                    <li><a href="Fournisseurs">Fournisseurs</a></li>
                    </Link>
                    <Link to="/Commande">
                    <li><a href="Commande">Commande</a></li>
                    </Link>
                    <Link to="/Process">
                    <li><a href="Process">Process</a></li>
                    </Link>
                    <Link to="/Valeurs">
                    <li><a href="Valeurs">Valeurs</a></li>
                    </Link>
                    <Link  to="/Argent">
                    <li><a  href="Argent">Notre Argent</a></li>
                    </Link>
                    <Link  to="/Connexion">
                    <li><a  href="Connexion">Connexion</a></li>
                    </Link>
                    <FontAwesomeIcon icon={faBars} />
                    
                </ul>
            </nav>
        </div>
        </header>
        <div class="content">
            <h1>Début de Sookandco</h1>
            <p>Bientot l'ensemble des elements de sookandco</p>

        </div>
   
            </div>
        )
    }
}
