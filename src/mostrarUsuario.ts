import { Adult } from './Adult';
import PromptSync = require('prompt-sync');
const prompt = PromptSync();

function mostrarUsuario(poderExcluir: boolean, adultos: Adult[]){
   if(poderExcluir){
      console.log();
      console.log('Nome do usuário: ' + adultos[(adultos.length-1)].nome);
      console.log('Idade: ' + adultos[(adultos.length-1)].idade);
      adultos[(adultos.length-1)].cpf();
      adultos[(adultos.length-1)].filhos();
      console.log('Localidade: ' + adultos[(adultos.length-1)].local);
      console.log('Nível de escolaridade: ' + adultos[(adultos.length-1)].nivelDeEscolaridade);
      prompt('');
   }
   else{
      prompt('[ERROR] Usuário já excluido!')
   }
}
export{mostrarUsuario};