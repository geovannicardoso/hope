import { Adult } from "./Adult";
import {mostrarUsuario} from './mostrarUsuario';
import PromptSync = require('prompt-sync');
const prompt = PromptSync();

function excluirUsuario(poderExcluir: boolean, adultos: Adult[]){
    if(poderExcluir){
        mostrarUsuario(poderExcluir, adultos);
        let excluir = prompt('Deseja excluir esse usuário? (S/N)');
        if(excluir == 'S' || excluir == 's'){
            adultos.pop();
            poderExcluir = false;
            prompt('usuário excluido com sucesso!');
        }
        else{
            prompt('Exclusão cancelada!');
        }
    }
    else{
        prompt('[ERROR] Usuário já foi excluido!')
    }
}
export{excluirUsuario};