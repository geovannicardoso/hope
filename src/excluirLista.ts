import { Adult } from "./Adult";
import PromptSync = require('prompt-sync');
const prompt = PromptSync();

function excluirLista(adultos: Adult[]): void{
   for(let i=0; i<adultos.length; i++){
      console.log();
      console.log(`ID: ${i}`);
      console.log(adultos[i].idade);
      console.log(adultos[i].local);
      console.log(adultos[i].nome);
      console.log(adultos[i].nivelDeEscolaridade);
      adultos[i].filhos();
      adultos[i].cpf();
  }
  let certeza: string = prompt('Você tem certeza? (S/N) ');
  if(certeza == 's' || certeza == 'S'){
      let id = Number(prompt('Digite o ID aqui >> '));
      adultos.splice(id, 1);
      prompt('Usuário excluido!');
  }
  else{
   prompt('operação cancelada!');
  }
}
export{excluirLista};