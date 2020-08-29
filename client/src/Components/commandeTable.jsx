import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./like";
import Table from "./common/table";
import "./Style/commandeTable.css";

class CommandeTable extends Component {
  columns = [
    {
      path: "nom",
      label: "Nom",
      content: (commande) => (
        <Link to={`/commandes/${commande._id}`}>{commande.nom}</Link>
      ),
    },
    { path: "plateforme.name", label: "Plateforme" },
    { path: "montant", label: "Montant (€)" },
    { path: "quantité", label: "Quantité Produit" },
    { path: "statut", label: "Statut" },
    { path: "urgence", label: "Urgence" },
    { path: "transporteur", label: "Transporteur" },
    {
      key: "like",
      content: (commande) => (
        <Like
          liked={commande.liked}
          onClick={() => this.props.onLike(commande)}
        />
      ),
    },
    {
      key: "delete",
      content: (commande) => (
        <button
          onClick={() => this.props.onDelete(commande)}
          className="btn btn-danger btn-sm"
        >
          Terminer
        </button>
      ),
    },
  ];

  render() {
    const { commandes, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={commandes}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CommandeTable;
