class Animal {
  constructor(dados) {
    this.tamanho = dados.tamanho;
    this.biomas = dados.biomas;
    this.tipo = dados.tipo;
  }

  checarCompatibilidadeEntrada() {}
  checarCompatibilidadeAnimal() {}
}

const Animais = {
  Leao: class extends Animal {
    constructor() {
      super({
        tamanho: 3,
        biomas: ["SAVANA"],
        tipo: "CARNIVORO",
      });
    }

    checarCompatibilidadeEntrada(recinto, quantidade) {
      if (!recinto.biomas.includes("SAVANA")) return false;
      if (recinto.animais.some((animal) => animal.tipo != this.tipo)) return false;

      return true;
    }

    checarCompatibilidadeAnimal(animal, recinto) {
      if (animal.tipo != this.tipo) return false;

      return true;
    }
  },
  Leopardo: class extends Animal {
    constructor() {
      super({
        tamanho: 2,
        biomas: ["SAVANA"],
        tipo: "CARNIVORO",
      });
    }

    checarCompatibilidadeEntrada(recinto, quantidade) {
      if (!recinto.biomas.includes("SAVANA")) return false;
      if (recinto.animais.some((animal) => animal.tipo != this.tipo)) return false;

      return true;
    }

    checarCompatibilidadeAnimal(animal, recinto) {
      if (animal.tipo != this.tipo) return false;

      return true;
    }
  },
  Crocodilo: class extends Animal {
    constructor() {
      super({
        tamanho: 3,
        biomas: ["RIO"],
        tipo: "CARNIVORO",
      });
    }

    checarCompatibilidadeEntrada(recinto, quantidade) {
      if (!recinto.biomas.includes("RIO")) return false;
      if (recinto.animais.some((animal) => animal.tipo != this.tipo)) return false;

      return true;
    }

    checarCompatibilidadeAnimal(animal, recinto) {
      if (animal.tipo != this.tipo) return false;

      return true;
    }
  },
  Macaco: class extends Animal {
    constructor() {
      super({
        tamanho: 1,
        biomas: ["SAVANA", "FLORESTA"],
        tipo: "HERBIVORO",
      });
    }

    checarCompatibilidadeEntrada(recinto, quantidade) {
      if (!recinto.biomas.some((bioma) => bioma == "SAVANA" || bioma == "FLORESTA")) return false;
      if (recinto.animais.some((animal) => animal.tipo != this.tipo)) return false;
      if (recinto.animais.length < 1 && quantidade < 2) return false;

      return true;
    }

    checarCompatibilidadeAnimal(animal, recinto) {
      if (animal.tipo != this.tipo) return false;

      return true;
    }
  },
  Gazela: class extends Animal {
    constructor() {
      super({
        tamanho: 2,
        biomas: ["SAVANA"],
        tipo: "HERBIVORO",
      });
    }

    checarCompatibilidadeEntrada(recinto, quantidade) {
      if (!recinto.biomas.includes("SAVANA")) return false;
      if (recinto.animais.some((animal) => animal.tipo != this.tipo)) return false;

      return true;
    }

    checarCompatibilidadeAnimal(animal, recinto) {
      if (animal.tipo != this.tipo) return false;

      return true;
    }
  },
  Hipopotamo: class extends Animal {
    constructor() {
      super({
        tamanho: 4,
        biomas: ["SAVANA", "RIO"],
        tipo: "HERBIVORO",
      });
    }

    // checar logica de ver se ja tem outro tipo de animal
    checarCompatibilidadeEntrada(recinto, quantidade) {
      if (!recinto.biomas.some((bioma) => bioma == "SAVANA" || bioma == "RIO")) return false;
      if (
        recinto.animais.some((animal) => animal.constructor.name != this.constructor.name) &&
        !recinto.biomas.includes("SAVANA") &&
        !recinto.biomas.includes("RIO")
      )
        return false;
      if (recinto.animais.some((animal) => animal.tipo != this.tipo)) return false;

      return true;
    }

    checarCompatibilidadeAnimal(animal, recinto) {
      if (animal.tipo != this.tipo) return false;
      if (
        animal.constructor.name != this.constructor.name &&
        !(recinto.biomas.includes("SAVANA") && recinto.biomas.includes("RIO"))
      )
        return false;

      return true;
    }
  },
};

export { Animais };
