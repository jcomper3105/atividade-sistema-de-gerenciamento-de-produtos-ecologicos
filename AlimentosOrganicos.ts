import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentosOrganicos implements ProdutoEcologico{
    nome: String;
    preco:Number;
    dataValidade: Date;
    ingredientes: string;

constructor(nome:string, preco:number, dataValidade:Date, ingredientes:string){
    this.nome=nome;
    this.preco=preco;
    this.dataValidade=dataValidade;
    this.ingredientes=ingredientes;
}

}
