export const recipesData = {
  recipes: [
    {
      id: 1,
      name: "Spaghetti bolognaise",
      ingredients: [
        { name: "250g spaghetti", pic: "spaghetti.png" },
        { name: "1 boîte tomates pelées", pic: "tomates-pelées.png" },
        { name: "1 boîte contentré de tomates", pic: "concentré-tomates.png" },
        { name: "250g haché porc-boeuf", pic: "haché.png" },
        { name: "1 oignon", pic: "oignon.png" },
        { name: "1 gousse d'ail", pic: "ail.png" },
        { name: "laurier", pic: "laurier.png" },
        { name: "huile", pic: "huile.png" },
      ],
      serving: 2,
      steps: [
        { step: "ÉTAPE 1", instruction: "Hacher l'ail et l'oignon." },
        {
          step: "ÉTAPE 2",
          instruction:
            "Faire chauffer l'huile dans une casserole assez grande. Faire revenir l'ail et l'oignon à feu doux pendant 5 min en remuant.",
        },
        {
          step: "ÉTAPE 3",
          instruction:
            "Augmenter la flamme, puis ajouter le haché. Faire brunir et remuer de façon à ce que la viande ne fasse pas de gros paquets.",
        },
        {
          step: "ÉTAPE 4",
          instruction:
            "Ajouter les tomates pelées, le concentré de tomates, le laurier et les épices.",
        },
        {
          step: "ÉTAPE 5",
          instruction:
            "Baisser ensuite le feu et laisser mijoter à couvert 1h à 1h30.",
        },
        {
          step: "ÉTAPE 6",
          instruction:
            "Faire cuire les spaghetti, puis ajouter la sauce bolognaise.",
        },
      ],
      time: "1h20",
      url: "spaghetti-bolo.jpg",
    },
    {
      id: 2,
      name: "Quiche chorizo",
      ingredients: [
        { name: "1 pâte brisée", pic: "pâte-brisée.png" },
        { name: "1 chorizo", pic: "chorizo.png" },
        { name: "tomates séchées", pic: "tomates-séchées.png" },
        { name: "1 poivron jaune", pic: "poivron-jaune.png" },
        { name: "3 oeufs", pic: "oeuf.png" },
        { name: "25cl crème fraîche", pic: "crème-fraîche.png" },
        { name: "1 bloc de feta", pic: "feta.png" },
      ],
      serving: 4,
      steps: [
        { step: "ÉTAPE 1", instruction: "Préchauffer le four à 180°." },
        { step: "ÉTAPE 2", instruction: "Étaler la pâte dans un moule." },
        {
          step: "ÉTAPE 3",
          instruction:
            "Couper le chorizo, les tomates séchées et le poivron et les déposer sur le fond de tarte, y émietter la fêta.",
        },
        {
          step: "ÉTAPE 4",
          instruction: "Battre les oeufs et la crème et verser sur la tarte.",
        },
        { step: "ÉTAPE 5", instruction: "Enfourner pendant 40 minutes." },
      ],
      time: "1h",
      url: "quiche-chorizo.jpg",
    },
  ],
};
