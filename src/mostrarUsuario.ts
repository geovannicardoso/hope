import { Adult } from './Adult';
import PromptSync = require('prompt-sync');
const prompt = PromptSync();

function mostrarUsuario(adultos: Adult[]){
   console.log();
   console.log(adultos[(adultos.length-1)].idade);
   console.log(adultos[(adultos.length-1)].local);
   console.log(adultos[(adultos.length-1)].nome);
   console.log(adultos[(adultos.length-1)].nivelDeEscolaridade);
   adultos[(adultos.length-1)].filhos();
   adultos[(adultos.length-1)].cpf();
}
export{mostrarUsuario};