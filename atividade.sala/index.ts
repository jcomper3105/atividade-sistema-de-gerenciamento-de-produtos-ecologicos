let nuemro: number = 10;
console.log(nuemro);

let nome:string = "Jeyce";
console.log(nome);

const pi:number = 3.14;
console.log(pi);

function saudacao(nome:string, idade:number){
    console.log('olá eu me chamo ${nome} e tenho ${idade} anos');
}

const nomeUsuario:string = "Jeyce";
const idade:number = 17;

saudacao(nomeUsuario,idade);

//objeto
var pessoa ={
    nome: "Alice",
    idade: 15,
    cidade: "Salvador",
    apresentar: function():string{
        return 'olá meu nome é ${this.nome}, e tenho ${this.idade} e sou da cidade de ${this.cidade}'
    }
}

console.log(pessoa.apresentar());

function somar(a: number, b: number): number{
    return a + b;
}

console.log(somar(3,4)); //saida:7
//console.log(somar('3','4'));// Erro de tipo em em tempo de compilação
