import React, { Fragment, Component } from "react";
import "./Style/Commande.css";
import { getPlateformes } from "../services/fakeGenreService";
import { getCommandes, deleteCommande } from "../services/fakeMovieService";
import _ from "lodash";
import { paginate } from "../utils/paginate.js";
import CommandeTable from "./commandeTable";
import ListGroup from "./listGroup";
import Pagination from "./pagination";
import { Link, Redirect } from "react-router-dom";
import SearchBox from "./searchBox";
import axios from "axios";

class Commande extends Component {
  state = {
    commandes: [],
    plateformes: [],
    currentPage: 1,
    pageSize: 8,
    searchQuery: "",
    selectedPlateforme: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    // import with axios

    const { data: commandes } = await axios.get(
      "http://localhost:8080/api/commande"
    );
    this.setState({ commandes });
    console.log(commandes);

    // const plateformes = [
    //   { _id: "", name: "Toute plateformes" },
    //   ...getPlateformes(),
    // ];

    // this.setState({ commandes: getCommandes(), plateformes });
  }

  handleDelete = (commande) => {
    const commandes = this.state.commandes.filter(
      (m) => m._id !== commande._id
    );
    this.setState({ commandes });

    deleteCommande(commande._id);
  };

  handleLike = (commande) => {
    const commandes = [...this.state.commandes];
    const index = commandes.indexOf(commande);
    commandes[index] = { ...commandes[index] };
    commandes[index].liked = !commandes[index].liked;
    this.setState({ commandes });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePlateformeSelect = (plateforme) => {
    this.setState({
      selectedPlateforme: plateforme,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedPlateforme: null,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedPlateforme,
      searchQuery,
      commandes: allCommandes,
    } = this.state;

    let filtered = allCommandes;
    if (searchQuery)
      filtered = allCommandes.filter((m) =>
        m.nom.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedPlateforme && selectedPlateforme._id)
      filtered = allCommandes.filter(
        (m) => m.plateforme._id === selectedPlateforme._id
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const commandes = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: commandes };
  };

  render() {
    const { length: count } = this.state.commandes;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0)
      return <p>Il n'y a pas de commandes dans la base de donnée.</p>;

    const { totalCount, data: commandes } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.plateformes}
            selectedItem={this.state.selectedPlateforme}
            onItemSelect={this.handlePlateformeSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/commandes/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            Nouvelle commande
          </Link>
          <p>Affichage de {totalCount} commandes dans la base de donnée.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <CommandeTable
            commandes={commandes}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Commande;
