import React, { Fragment, Component } from "react";
import "./Style/Commande.css";
import { getPlateforme } from "../services/fakeGenreService";
import { getCommandes } from "../services/fakeMovieService";
import _ from "lodash";
import { paginate } from "../utils/paginate.js";
import CommandeTable from "./commandeTable";
import ListGroup from "./listGroup";
import Pagination from "./pagination";

class Commande extends Component {
  state = {
    movies: [],
    pageSize: 9,
    currentPage: 1,
    plateforme: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const plateforme = [
      { _id: "", name: "Toutes les commandes" },
      ...getPlateforme(),
    ];
    this.setState({ movies: getCommandes(), plateforme });
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((film) => film._id !== movie._id);
    this.setState({ movies });
  };

  handlePageSize = (page) => {
    console.log(page);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenderSelect = (gender) => {
    this.setState({ selectedGenre: gender, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleAdd = (movie) => {
    const movies = this.state.movies;
    this.setState({ movies });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;
    if (count === 0) return <p>Aucunes commandes dans la base de donnée</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.Plateforme._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <Fragment>
        <div className="container-m">
          <div className="affichage">
            <div className=">">
              <ListGroup
                items={this.state.plateforme}
                selectedItem={this.state.selectedGenre}
                onItemSelect={this.handleGenderSelect}
              />
            </div>
            <div className="affichage">
              <p>
                Il y a {filtered.length} commandes en attente dans la base de
                donnée
              </p>
              <CommandeTable
                movies={movies}
                sortColumn={sortColumn}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                onSort={this.handleSort}
              />
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Commande;
