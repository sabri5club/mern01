import * as plateformesAPI from "./fakeGenreService";

const commandes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    titre: "Terminator",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    quantité: 6,
    statut: "En cours",
    date: "2020-08-17",
    urgence: "Elevée",
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    titre: "Die Hard",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    quantité: 5,
    statut: "En cours",
    date: "2020-08-17",
    urgence: "Moyenne",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    titre: "Get Out",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    quantité: 8,
    date: "2020-08-17",
    urgence: "Moyenne",
    statut: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    titre: "Trip to Italy",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    quantité: 7,
    date: "2020-08-17",
    urgence: "Moyenne",
    statut: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    titre: "Airplane",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    quantité: 7,
    date: "2020-08-17",
    urgence: "Moyenne",
    statut: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    titre: "Wedding Crashers",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
    quantité: 7,
    date: "2020-08-17",
    urgence: "Moyenne",
    statut: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    titre: "Gone Girl",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    quantité: 7,
    date: "2020-08-17",
    urgence: "Moyenne",
    statut: "Problème",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    titre: "The Sixth Sense",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
    quantité: 4,
    date: "2020-08-17",
    urgence: "Elevée",
    statut: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    titre: "The Avengers",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
    quantité: 7,
    date: "2020-08-17",
    urgence: "Basse",
    statut: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    titre: "Snap message",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471819", name: "Snapchat" },
    quantité: 7,
    date: "2020-08-17",
    urgence: "Basse",
    statut: "A envoyer",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471828",
    titre: "Insta message",
    plateforme: { _id: "5b21ca3eeb7f6fbccd471821", name: "Instragram" },
    quantité: 7,
    date: "2020-08-17",
    urgence: "Basse",
    statut: "A envoyer",
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
  commandeInDb.titre = commande.titre;
  commandeInDb.plateforme = plateformesAPI.plateformes.find(
    (g) => g._id === commande.plateformeId
  );
  commandeInDb.quantité = commande.quantité;
  commandeInDb.statut = commande.statut;
  commandeInDb.urgence = commande.urgence;

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
