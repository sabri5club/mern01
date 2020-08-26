import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <Link to="/Strategie">
            <li class="nav-item active">
              <a class="nav-link" href="livres.html">
                Stratégie <span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/Commande">
            <li class="nav-item active">
              <a class="nav-link" href="livres.html">
                Commandes<span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/Fournisseur">
            <li class="nav-item active">
              <a class="nav-link" href="livres.html">
                Fournisseur<span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/Process">
            <li class="nav-item active">
              <a class="nav-link" href="livres.html">
                Process<span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/Argent">
            <li class="nav-item active">
              <a class="nav-link" href="livres.html">
                Argent<span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/Valeurs">
            <li class="nav-item active">
              <a class="nav-link" href="livres.html">
                Valeurs<span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <li onClick={logout} class="nav-item active">
            <a class="nav-link" href="livres.html">
              Déconnexion<span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="True"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <Link to="/Connexion">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Connexion<span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/Inscription">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Inscription<span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
          <Link to="/Accueil">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Accueil<span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );

  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
