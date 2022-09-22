import { Adult } from './Adult';
import PromptSync = require('prompt-sync');
const prompt = PromptSync();

function addUsuario(): Adult{
    let idade = Number(prompt('Idade:'));
    let local = prompt('Local:');
    let nome = prompt('Nome:');
    let nivelDeEscolaridade = prompt('nivelDeEscolaridade:');
    let filhos = Number(prompt('filhos:'));
    let cpf = Number(prompt('cpf:'));

    let adulto: Adult = new Adult(idade, local, nome, nivelDeEscolaridade, filhos, cpf);
    prompt('Usuário adicionado!');
    return adulto;
}
export{addUsuario};