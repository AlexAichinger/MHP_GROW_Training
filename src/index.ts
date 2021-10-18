import * as f from "./fruits";

function displayFruit(f: f.Fruit): string {
  return `
  <div class="row">
    <div class="col-4">${f.name} ${f.icon ? f.icon : "&#10067"}</div>
    <div class="col-4">Taste: ${f.taste} </div>
    <div class="col-4">Is toxic?: ${f.isToxic === true ? "&#128128" : "&#10062"
    }</div>
  </div>
`;
}

function getAllFruits(): string {
  const result: string[] = [];
  f.getFruits().forEach((fruit) => {
    result.push(displayFruit(fruit));
  });
  return result.join("\n");
}

function getNonToxicFruits(): string {
  const result: string[] = [];
  f.filterAllToxicFruits(f.getFruits()).forEach((fruit) => {
    result.push(displayFruit(fruit));
  });
  return result.join("\n");
}

function getSortedFruits(): string {
  const result: string[] = [];
  f.orderByAlphabet(f.getFruits()).forEach((fruit) => {
    result.push(displayFruit(fruit));
  });
  return result.join("\n");
}

function getGroupedFruits(): string {
  const result: string[] = [];
  f.groupByTaste(f.getFruits()).forEach((fruit) => {
    result.push(displayFruit(fruit));
  });
  return result.join("\n");
}

function getFruitSalad(): string {
  const result: string[] = [];
  f.makeFruitSalad(f.getFruits()).forEach((fruit) => {
    result.push(displayFruit(fruit));
  });
  return result.join("\n");
}

document.getElementById("all-fruits")!.innerHTML = getAllFruits();
document.getElementById("non-toxic-fruits")!.innerHTML = getNonToxicFruits();
document.getElementById(
  "sorted-fruits-alphabet"
)!.innerHTML = getSortedFruits();
document.getElementById("grouped-by-taste")!.innerHTML = getGroupedFruits();
document.getElementById("fruit-salad")!.innerHTML = getFruitSalad();
