enum Taste {
  sweet = "sweet",
  bitter = "bitter",
  sour = "sour",
  salty = "salty",
  umami = "umami"
}

export interface Fruit {
  name: string;
  taste: Taste;
  icon?: string;
  isToxic?: boolean;
}

const fruits: Fruit[] = [
  {
    name: "Banana",
    taste: Taste.sweet,
    icon: "&#127820"
  },
  {
    name: "Apple",
    taste: Taste.sour,
    icon: "&#127822"
  },
  {
    name: "Ramazotti",
    taste: Taste.bitter,
    isToxic: true,
    icon: "&#127864"
  },
  {
    name: "Orange",
    taste: Taste.sour,
    isToxic: false,
    icon: "&#127818"
  },
  {
    name: "Baby Ananas",
    taste: Taste.sweet,
    icon: "&#127821"
  },
  {
    name: "MacFries",
    taste: Taste.salty,
    icon: "&#127839",
    isToxic: true
  },
  {
    name: "Vegan Chicken",
    taste: Taste.umami,
    icon: "&#127831"
  },
  {
    name: "Corn",
    taste: Taste.sweet,
    icon: "&#127805"
  },
  {
    name: "toadstool",
    taste: Taste.bitter,
    icon: "&#127812",
    isToxic: true
  },
  {
    name: "Grape",
    taste: Taste.sweet,
    icon: "&#127815"
  },
  {
    name: "Cherry",
    taste: Taste.sweet,
    icon: "&#127826"
  },
  {
    name: "Chicken Salad",
    taste: Taste.umami,
    icon: "&#127835"
  }
];

export function getFruits(): Fruit[] {
  return Object.assign([], fruits);
}

export function orderByAlphabet(input: Fruit[]): Fruit[] {
  return [{ name: "Unkown", taste: Taste.bitter }];
}

export function groupByTaste(input: Fruit[]): Fruit[] {
  return [{ name: "Unkown", taste: Taste.bitter }];
}

export function filterAllToxicFruits(input: Fruit[]): Fruit[] {
  return [{ name: "Unkown", taste: Taste.bitter, isToxic: true }];
}
