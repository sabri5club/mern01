import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './Style/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
   
    <ul>
      
        <Link to='/'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Accueil</span>
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
          <Link onClick={logout}>
      <li>
         
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Déconnexion</span>
        
      </li>
      </Link>
    </ul>
 
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/Accueil'>Accueil</Link>
      </li>
      <li>
        <Link to='/Inscription'>Inscription</Link>
      </li>
      <li>
        <Link to='/connexion'>Connexion</Link>
      </li>
     
                  
    </ul>
   
  );

  return (
    <nav className='navbar hero'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> Sookandco
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);