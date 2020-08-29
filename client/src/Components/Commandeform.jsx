import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getCommande, saveCommande } from "../services/fakeMovieService";
import { getPlateformes } from "../services/fakeGenreService";

class CommandeForm extends Form {
  state = {
    data: {
      nom: "",
      plateformeId: "",
      quantité: "",
      statut: "",
      urgence: "",
      transporteur: "",
      montant: "",
      mail: "",
      tel: "",
    },
    plateformes: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    nom: Joi.string().required().label("Nom"),
    plateformeId: Joi.string().required().label("Plateforme"),
    quantité: Joi.number().required().min(0).max(100).label("Quantité"),
    statut: Joi.string().required().label("Statut"),
    urgence: Joi.string().required().label("Urgence"),
    transporteur: Joi.string().required().label("Transporteur"),
    montant: Joi.number().required().label("Montant"),
    mail: Joi.string().label("Email"),
    tel: Joi.string().label("Téléphone"),
  };

  componentDidMount() {
    const plateformes = getPlateformes();
    this.setState({ plateformes });

    const commandeId = this.props.match.params.id;
    if (commandeId === "new") return;

    const commande = getCommande(commandeId);
    if (!commande) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(commande) });
  }

  mapToViewModel(commande) {
    return {
      _id: commande._id,
      nom: commande.nom,
      plateformeId: commande.plateforme._id,
      quantité: commande.quantité,
      statut: commande.statut,
      urgence: commande.urgence,
      transporteur: commande.transporteur,
      montant: commande.montant,
      mail: commande.mail,
      tel: commande.tel,
    };
  }

  doSubmit = () => {
    saveCommande(this.state.data);

    this.props.history.push("/commandes");
  };

  render() {
    return (
      <div>
        <h1>Formulaire commande</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("nom", "Nom")}
          {this.renderSelect(
            "plateformeId",
            "Plateforme",
            this.state.plateformes
          )}
          {this.renderInput("quantité", "Quantité produit", "number")}
          {this.renderInput("statut", "Statut")}
          {this.renderInput("urgence", "Urgence")}
          {this.renderInput("transporteur", "Transporteur")}
          {this.renderInput("montant", "Montant")}
          {this.renderInput("mail", "Mail")}
          {this.renderInput("tel", "Téléphone")}
          {this.renderButton("Sauvegarder")}
        </form>
      </div>
    );
  }
}

export default CommandeForm;
