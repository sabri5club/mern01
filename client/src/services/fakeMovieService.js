import * as genresAPI from "./fakeGenreService";

const commandes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    titre: "Terminator",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    numberInStock: 6,
    dailyRentalRate: "En cours",
    date:"2020-08-17",
    urgence: "Elevée",
    publishDate: "2018-01-03T19:04:28.809Z",
    liked:true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    titre: "Die Hard",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    numberInStock: 5,
    dailyRentalRate: "En cours",
    date:"2020-08-17",
    urgence: "Moyenne",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    titre: "Get Out",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    numberInStock: 8,
    date:"2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "A envoyer"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    titre: "Trip to Italy",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    numberInStock: 7,
    date:"2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "A envoyer"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    titre: "Airplane",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    numberInStock: 7,
    date:"2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "A envoyer"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    titre: "Wedding Crashers",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    numberInStock: 7,
    date:"2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "A envoyer"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    titre: "Gone Girl",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    numberInStock: 7,
    date:"2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "Problème"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    titre: "The Sixth Sense",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    numberInStock: 4,
    date:"2020-08-17",
    urgence: "Elevée",
    dailyRentalRate: "A envoyer"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    titre: "The Avengers",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    numberInStock: 7,
    date:"2020-08-17",
    urgence: "Basse",
    dailyRentalRate: "A envoyer"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    titre: "Snap message",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471819", name: "Snapchat" },
    numberInStock: 7,
    date:"2020-08-17",
    urgence: "Basse",
    dailyRentalRate: "A envoyer"
  },
  {
  _id: "5b21ca3eeb7f6fbccd471821",
    titre: "Insta message",
    Plateforme: { _id: "5b21ca3eeb7f6fbccd471821", name: "Instragram" },
    numberInStock: 7,
    date:"2020-08-17",
    urgence: "Basse",
    dailyRentalRate: "A envoyer"
  }
];

export function getCommandes() {
  return commandes;
}

export function getCommande(id) {
  return commandes.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = commandes.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.plateforme = genresAPI.plateforme.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    commandes.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = commandes.find(m => m._id === id);
  commandes.splice(commandes.indexOf(movieInDb), 1);
  return movieInDb;
}
