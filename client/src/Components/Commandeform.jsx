import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getCommande, saveCommande } from "../services/fakeMovieService";
import { getPlateformes } from "../services/fakeGenreService";

class CommandeForm extends Form {
  state = {
    data: {
      titre: "",
      plateformeId: "",
      quantité: "",
      statut: "",
      urgence: "",
    },
    plateformes: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    titre: Joi.string().required().label("Titre"),
    plateformeId: Joi.string().required().label("Plateforme"),
    quantité: Joi.number().required().min(0).max(100).label("Quantité"),
    statut: Joi.string().required().label("Statut"),
    urgence: Joi.string().required().label("Urgence"),
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
      titre: commande.titre,
      plateformeId: commande.plateforme._id,
      quantité: commande.quantité,
      statut: commande.statut,
      urgence: commande.urgence,
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
          {this.renderInput("titre", "Titre")}
          {this.renderSelect(
            "plateformeId",
            "Plateforme",
            this.state.plateformes
          )}
          {this.renderInput("quantité", "Quantité produit", "number")}
          {this.renderInput("statut", "Statut")}
          {this.renderInput("urgence", "Urgence")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CommandeForm;
