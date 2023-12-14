import AnimaNumeros from "./anima-numeros.js";

export default class initFetchAnimais {
  constructor(grid) {
    this.numerosGrid = document.querySelector(grid);
  }

  async fetchAnimais(url, numeros, observeTarget, observerClass) {
    this.animaisResponse = await fetch(url);
    this.animaisJSON = await this.animaisResponse.json();
    this.percorrerAnimais();

    this.animaNumeros = new AnimaNumeros(numeros, observeTarget, observerClass);
    this.animaNumeros.init();
  }

  percorrerAnimais() {
    this.animaisJSON.forEach((animal) => {
      const divAnimal = this.createAnimal(animal);
      this.numerosGrid.appendChild(divAnimal);
    });
  }

  createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  init() {
    this.fetchAnimais(
      "../animaisapi.json",
      "[data-numero]",
      ".numeros",
      "ativo"
    );
    return this;
  }
}
