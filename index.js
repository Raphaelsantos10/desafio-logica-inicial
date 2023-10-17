
// Inicialização de variáveis
let heroi = "Raphael";
let xp = 0;
let numeroDeMonstrosMortos = 50;

// Exibição de informações iniciais
console.log("Número de monstros mortos: " + numeroDeMonstrosMortos);
console.log("Cada monstro derrotado concede 250 XP.");

// Laço de repetição para ganhar XP
for (let i = 0; i < numeroDeMonstrosMortos; i++) {
  xp += 250;
  console.log("Ganhou 250 XP. Total de XP: " + xp);
}

// Cálculo do nível do herói
let nivel = xp;

// Estrutura de controle para determinar o nível
switch (true) {
  case nivel <= 1000:
    console.log("O herói " + heroi + " está no nível Ferro.");
    break;
  case nivel > 1000 && nivel <= 2000:
    console.log("O herói " + heroi + " está no nível Bronze.");
    break;
  case nivel > 2000 && nivel <= 5000:
    console.log("O herói " + heroi + " está no nível Prata.");
    break;
  case nivel > 5000 && nivel <= 7000:
    console.log("O herói " + heroi + " está no nível Ouro.");
    break;
  case nivel > 7000 && nivel <= 8000:
    console.log("O herói " + heroi + " está no nível Platina.");
    break;
  case nivel > 8000 && nivel <= 9000:
    console.log("O herói " + heroi + " está no nível Ascendente.");
    break;
  case nivel > 9000 && nivel <= 10000:
    console.log("O herói " + heroi + " está no nível Imortal.");
    break;
  case nivel >= 10001:
    console.log("O herói " + heroi + " está no nível Radiante.");
    break;
}

