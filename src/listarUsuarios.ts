import { Adult } from "./Adult";
import PromptSync = require("prompt-sync");
const prompt = PromptSync();

function listarUsuarios(adultos: Adult[]){
   for(let i=0; i<adultos.length; i++){
      console.log();
      console.log(adultos[i].idade);
      console.log(adultos[i].local);
      console.log(adultos[i].nome);
      console.log(adultos[i].nivelDeEscolaridade);
      adultos[i].filhos();
      adultos[i].cpf();
   }
   prompt('Usuários listados!');
}
export{listarUsuarios};