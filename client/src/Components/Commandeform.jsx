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
      numberInStock: "",
      dailyRentalRate: "",
    },
    plateformes: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    titre: Joi.string().required().label("Titre"),
    plateformeId: Joi.string().required().label("plateforme"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
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
      numberInStock: commande.numberInStock,
      dailyRentalRate: commande.dailyRentalRate,
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
            "plateforme",
            this.state.plateformes
          )}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CommandeForm;
