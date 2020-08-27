import * as plateformesAPI from "./fakeGenreService";

const commandes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    titre: "Terminator",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    numberInStock: 6,
    dailyRentalRate: "En cours",
    date: "2020-08-17",
    urgence: "Elevée",
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    titre: "Die Hard",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    numberInStock: 5,
    dailyRentalRate: "En cours",
    date: "2020-08-17",
    urgence: "Moyenne",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    titre: "Get Out",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    numberInStock: 8,
    date: "2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    titre: "Trip to Italy",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    numberInStock: 7,
    date: "2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    titre: "Airplane",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    numberInStock: 7,
    date: "2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    titre: "Wedding Crashers",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    numberInStock: 7,
    date: "2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    titre: "Gone Girl",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    numberInStock: 7,
    date: "2020-08-17",
    urgence: "Moyenne",
    dailyRentalRate: "Problème",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    titre: "The Sixth Sense",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    numberInStock: 4,
    date: "2020-08-17",
    urgence: "Elevée",
    dailyRentalRate: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    titre: "The Avengers",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    numberInStock: 7,
    date: "2020-08-17",
    urgence: "Basse",
    dailyRentalRate: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    titre: "Snap message",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471819", name: "Snapchat" },
    numberInStock: 7,
    date: "2020-08-17",
    urgence: "Basse",
    dailyRentalRate: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    titre: "Insta message",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471821", name: "Instragram" },
    numberInStock: 7,
    date: "2020-08-17",
    urgence: "Basse",
    dailyRentalRate: "A envoyer",
  },
];

export function getCommandes() {
  return commandes;
}

export function getCommande(id) {
  return commandes.find((m) => m._id === id);
}

export function saveCommande(commande) {
  let commandeInDb = commandes.find((m) => m._id === commande._id) || {};
  commandeInDb.title = commande.title;
  commandeInDb.plateforme = plateformesAPI.plateformes.find(
    (g) => g._id === commande.plateformeId
  );
  commandeInDb.numberInStock = commande.numberInStock;
  commandeInDb.dailyRentalRate = commande.dailyRentalRate;

  if (!commandeInDb._id) {
    commandeInDb._id = Date.now().toString();
    commandes.push(commandeInDb);
  }

  return commandeInDb;
}

export function deleteCommande(id) {
  let commandeInDb = commandes.find((m) => m._id === id);
  commandes.splice(commandes.indexOf(commandeInDb), 1);
  return commandeInDb;
}
