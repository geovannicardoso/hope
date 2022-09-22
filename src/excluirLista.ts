import { Adult } from "./Adult";

function excluirLista(adultos: Adult[]): number{
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

  let id = Number(prompt('Digite o ID aqui >> '));
  return id;
}
export{excluirLista};