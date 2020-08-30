import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Style/Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import { NavItem } from "react-bootstrap";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <NavItem className="nav-item active">
            <Link to="/Strategie" className="nav-link">
              Stratégie <span className="sr-only">(current)</span>
            </Link>
          </NavItem>

          <NavItem className="nav-item active">
            <Link to="/Commande" className="nav-link">
              Commandes<span className="sr-only">(current)</span>
            </Link>
          </NavItem>

          <NavItem className="nav-item active">
            <Link to="/Fournisseur" className="nav-link">
              Fournisseur<span className="sr-only">(current)</span>
            </Link>
          </NavItem>

          <NavItem className="nav-item active">
            <Link to="/Process" className="nav-link">
              Process<span className="sr-only">(current)</span>
            </Link>
          </NavItem>

          <NavItem className="nav-item active">
            <Link to="/Argent" className="nav-link">
              Argent<span className="sr-only">(current)</span>
            </Link>
          </NavItem>

          <NavItem className="nav-item active">
            <Link to="/Valeurs" className="nav-link">
              Valeurs<span className="sr-only">(current)</span>
            </Link>
          </NavItem>

          <li onClick={logout} className="nav-item active">
            <Link className="nav-link">
              Déconnexion<span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="True"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <NavItem className="nav-item active">
            <Link to="/Connexion" className="nav-link" href="#">
              Connexion<span className="sr-only">(current)</span>
            </Link>
          </NavItem>

          <NavItem className="nav-item active">
            <Link to="/Inscription" className="nav-link" href="#">
              Inscription<span className="sr-only">(current)</span>
            </Link>
          </NavItem>

          <NavItem className="nav-item active">
            <Link to="/Accueil" className="nav-link" href="#">
              Accueil<span className="sr-only">(current)</span>
            </Link>
          </NavItem>
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
