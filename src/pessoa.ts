import PromptSync = require("prompt-sync");
const prompt = PromptSync();

 abstract class Pessoa{

    public idade: number;
    public local: string; 
    public nome: string;
    public nivelDeEscolaridade: string;
    
   
    
        constructor (idade: number, local: string, nome: string, nivelDeEscolaridade: string){

            this.nome = nome
            this.local = local
            this.idade = idade
            this.nivelDeEscolaridade = nivelDeEscolaridade


        }
            //TODO: retornar idade
    public retorneIdade(): Number{
        return this.idade 

    }

   

}

export {Pessoa};