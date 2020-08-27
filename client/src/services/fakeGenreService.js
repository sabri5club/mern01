export const plateformes = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Prestashop" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Manuelle" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Etsy" },
  { _id: "5b21ca3eeb7f6fbccd471819", name: "Snapchat" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "Instagram" },
];

export function getPlateformes() {
  return plateformes.filter(g => g);
}
