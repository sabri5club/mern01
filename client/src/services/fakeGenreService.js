export const plateforme = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Etsy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Manuelle" }
];

export function getPlateforme() {
  return plateforme.filter(g => g);
}
