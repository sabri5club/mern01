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
      <div className="table-1">
        <table>
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")}>Titre</th>
              <th onClick={() => this.raiseSort("Plateforme.name")}>Plateforme</th>
              <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
              <th onClick={() => this.raiseSort("dailyRentalRate")}>Statut</th>
              <th>Date</th>
              <th onClick={() => this.raiseSort("")}>Like</th>
              
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
                <td>{movie.like}</td>
                <td>{movie.like}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => onLike(movie)}
                  ></Like>
                </td>
                <td onClick={() => onDelete(movie)}>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CommandeTable;
