function calcularIdade(anos){
    return `daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade`;
}
const pessoa1 = {
    nome: "Sergio",
    idade: 55,
};
const pessoa2 = {
    nome: "Marcus",
    idade: 23,
};
const pessoa3 = {
    nome: "Bruna",
    idade: 15,
};
const pessoa4 = {
    nome: "Beatriz",
    idade: 28,
};
const animal1 = {
    nome: "Whisky",
    idade: 0,
};
console.log(calcularIdade.call(animal1, 30));