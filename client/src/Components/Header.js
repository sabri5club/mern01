import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Style/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="hero">
        <div id="navbar" className="navbar">
            <div>
            <h1 className="">Sookandco</h1>
            <h2>Nouvelle Dashboard</h2>
            </div>
            <i className="fa fa-bars" aria-hidden="true"></i>
            <nav>
                <ul>
                   <Link style={{textDecoration:"none"}} to="/">
                    <li>Accuei </li>
                    </Link>
                    <Link to="/Strategie">
                    <li>Stratégie</li>
                    </Link>
                    <Link to="/Fournisseurs">
                    <li>Fournisseurs</li>
                    </Link>
                    <Link to="/Commande">
                    <li>Commande</li>
                    </Link>
                    <Link to="/Process">
                    <li>Process</li>
                    </Link>
                    <Link to="/Valeurs">
                    <li>Valeurs</li>
                    </Link>
                    <Link  to="/Argent">
                    <li>Notre Argent</li>
                    </Link>
                    <Link  to="/Connexion">
                    <li>Connexion</li>
                    </Link>
                    <FontAwesomeIcon icon={faBars} />
                    
                </ul>
            </nav>
        </div>
        </header>
        <div className="content">
            <h1>Début de Sookandco</h1>
            <p>Bientot l'ensemble des elements de sookandco</p>

        </div>
   
            </div>
        )
    }
}
