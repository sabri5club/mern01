import React, { Component } from "react";
import Like from "./like";
import "./Style/commandeTable.css";

class CommandeTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <div className="container-fluid">
        <table>
          <thead>
            <tr className="table-dark">
              <th onClick={() => this.raiseSort("title")}>Titre</th>
              <th onClick={() => this.raiseSort("Plateforme.name")}>
                Plateforme
              </th>
              <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
              <th onClick={() => this.raiseSort("dailyRentalRate")}>Statut</th>
              <th>Date</th>
              <th onClick={() => this.raiseSort("")}>Urgence</th>
              <th>Détails</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.titre}</td>
                <td>{movie.Plateforme.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{movie.date}</td>
                <td>{movie.urgence}</td>
                <td>
                  <button className="btn btn-secondary">Détails</button>
                </td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => onLike(movie)}
                  ></Like>
                </td>
                <td onClick={() => onDelete(movie)}>
                  <button className="btn btn-danger btn-sm">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
          <form>
            <h1>Hello</h1>
            <p>Enter your name:</p>
            <input type="text" />
          </form>
        </table>
      </div>
    );
  }
}

export default CommandeTable;
