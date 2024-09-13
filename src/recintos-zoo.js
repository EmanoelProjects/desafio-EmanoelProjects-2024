import { Animais } from "./animais.js";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
}

class RecintosZoo {
  recintos = {
    1: {
      biomas: ["SAVANA"],
      tamanho: 10,
      animais: [new Animais.Macaco(), new Animais.Macaco(), new Animais.Macaco()],
    },
    2: {
      biomas: ["FLORESTA"],
      tamanho: 5,
      animais: [],
    },
    3: {
      biomas: ["SAVANA", "RIO"],
      tamanho: 7,
      animais: [],
    },
    4: {
      biomas: ["RIO"],
      tamanho: 8,
      animais: [],
    },
    5: {
      biomas: ["SAVANA"],
      tamanho: 9,
      animais: [new Animais.Leao()],
    },
  };

  analisaRecintos(animal, quantidade) {
    const recintosDisponiveis = [];
    let animalSelecionado = Animais[toTitleCase(animal)];

    if (!animalSelecionado) return { erro: "Animal inválido" };
    if (quantidade < 1) return { erro: "Quantidade inválida" };

    animalSelecionado = new animalSelecionado();

    for (let index in this.recintos) {
      console.log(``);

      const recinto = this.recintos[index];
      let quantidadeDisponivel = recinto.tamanho - recinto.animais.reduce((prev, curr) => prev + curr.tamanho, 0);
      const tiposNoRecinto = new Set(recinto.animais.map((el) => el.constructor.name));
      if (tiposNoRecinto.size > 0 && !tiposNoRecinto.has(animalSelecionado.constructor.name)) quantidadeDisponivel--;
      const quantidadeNecessaria = animalSelecionado.tamanho * quantidade;

      console.log(`Tratando recinto ${index}:`);
      console.log(`Animais: ${recinto.animais.map((el) => el.constructor.name)}`);
      console.log(`Quantidade disponível: ${quantidadeDisponivel}`);
      console.log(`Quantidade necessária: ${quantidadeNecessaria}`);

      if (quantidadeNecessaria > quantidadeDisponivel) {
        console.log(`Quantidade necessária maior que disponível. Continuando para próximo recinto`);
        continue;
      }

      if (!animalSelecionado.checarCompatibilidadeEntrada(recinto, quantidade)) {
        console.log(`Recinto não compatível com ${animalSelecionado.constructor.name}.`);
        continue;
      }

      for (let currentAnimal of recinto.animais) {
        if (!currentAnimal.checarCompatibilidadeAnimal(animalSelecionado, recinto)) {
          console.log(
            `${currentAnimal.constructor.name} não está confortável com a entrada de ${animalSelecionado.constructor.name}.`
          );
          continue;
        }
      }

      recintosDisponiveis.push(
        `Recinto ${index} (espaço livre: ${quantidadeDisponivel - quantidadeNecessaria} total: ${recinto.tamanho})`
      );
    }

    return recintosDisponiveis.length ? { recintosViaveis: recintosDisponiveis } : { erro: "Não há recinto viável" };
  }
}

console.log(new RecintosZoo().analisaRecintos("HIPOPOTAMO", 1));

export { RecintosZoo as RecintosZoo };
