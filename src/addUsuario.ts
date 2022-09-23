import { Adult } from './Adult';
import PromptSync = require('prompt-sync');
const prompt = PromptSync();

function addUsuario(adultos: Adult[]){
    let nome = prompt('Digite seu nome: ');
    let idade = Number(prompt('Digite sua idade: '));
    let cpf = Number(prompt('CPF: '));
    let filhos = Number(prompt('Quantidade de filhos: '));

    let local: string;
    let idLocal: number;
    do{
        console.log('Digite em qual região você vive: ');
        console.log('[1] Zona Central');
        console.log('[2] Zona Norte ');
        console.log('[3] Zona Sul ');
        console.log('[4] Zona Oeste');
        idLocal = Number(prompt('>> '));
        switch (idLocal){
            case 1: 
                local = 'Zona central';
                break;

            case 2:
                local = 'Zona Norte';
                break;

            case 3:
                local = 'Zona Sul';
                break;

            case 4:
                local = 'Zona Oeste';
                break;

            default:
                prompt('[ERROR] Região Inexistente!!!');
        }
    }while(idLocal < 1 || idLocal > 4);

    let nivelDeEscolaridade: number;
    do{
        console.log('Qual seu nível de escolaridade: ');
        console.log('[1] Não se aplica');
        console.log('[2] Fundamental');
        console.log('[3] Médio');
        console.log('[4] Superior');
        nivelDeEscolaridade = Number(prompt('>> '));

        if(nivelDeEscolaridade > 4  || nivelDeEscolaridade < 1){
            prompt('[ERROR] Região Inexistente!!!');
        }
    }while(nivelDeEscolaridade < 1 || nivelDeEscolaridade > 4);

    let adulto: Adult = new Adult(idade, local, nome, nivelDeEscolaridade, filhos, cpf);
    adultos.push(adulto);
    prompt('Usuário adicionado!');
}
export{addUsuario};