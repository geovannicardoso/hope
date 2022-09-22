import { Pessoa } from  "./pessoa";
import { Itemcpf } from "./Itemcpf";
import { ItemFilhos } from "./ItemFilhos";

class Adult extends Pessoa implements Itemcpf, ItemFilhos{

    public filhoA: number;
    public cpfA: number;
    
    constructor(idade: number, local: string, nome: string, nivelDeEscolaridade: string, filhoA: number, cpfA: number){
        
        super(idade, local, nome, nivelDeEscolaridade);

        this.cpfA = cpfA;
        this.filhoA = filhoA;

    }
    cpf(): void {
        console.log(`CPF: ${this.cpfA}`);
    }
    
    filhos(): void{
        console.log(`O ${this.nome} tem ${this.filhoA} filhos.`)
   

    }



}

export {Adult}