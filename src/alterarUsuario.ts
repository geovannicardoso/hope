import { Adult } from "./Adult";
import { addUsuario } from './addUsuario';
import { mostrarUsuario } from './mostrarUsuario';
import PromptSync = require('prompt-sync');
const prompt = PromptSync();

function alterarUsuario(poderExcluir: boolean, adultos: Adult[]){
    if(poderExcluir){
        mostrarUsuario(poderExcluir, adultos);
        let alterar = prompt('Deseja alterar este usuário? (S/N)');
        if(alterar == 'S' || alterar == 's'){
            adultos.pop();
            console.log('Usuário apagado! Digite as alterações: ');
            addUsuario(adultos);
        }
        else{
            prompt('alteração cancelada!');
        }
    }
    else{
        prompt('[ERROR] Usuário já foi excluido!')
    }
}
export{alterarUsuario};