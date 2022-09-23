import { Pessoa } from  "./pessoa";
import { Itemcpf } from "./Itemcpf";
import { ItemFilhos } from "./ItemFilhos";

class Adult extends Pessoa implements Itemcpf, ItemFilhos{

    public filhoA: number;
    public cpfA: number;
    
    constructor(idade: number, local: string, nome: string, nivelDeEscolaridade: number, filhoA: number, cpfA: number){
        
        super(idade, local, nome, nivelDeEscolaridade);

        this.cpfA = cpfA;
        this.filhoA = filhoA;

    }

    public get escolaridade(){
        if(this.nivelDeEscolaridade == 1){
            return "Não se aplica";
        }
        else if(this.nivelDeEscolaridade == 2){
            return "Fundamental";
        }
        else if(this.nivelDeEscolaridade == 3){
            return "Médio";
        }
        else if(this.nivelDeEscolaridade == 4){
            return "Superior";
        }
    }
    
    cpf(): void {
        console.log(`CPF: ${this.cpfA}`);
    }
    
    filhos(): void{
        console.log(`O ${this.nome} tem ${this.filhoA} filhos.`)
   

    }



}

export {Adult}