import { admLogin } from './adm';
import { addUsuario } from './addUsuario';
import { mostrarUsuario } from './mostrarUsuario';
import { listarUsuarios } from './listarUsuarios';
import { excluirLista } from './excluirLista';
import { excluirUsuario } from './excluirUsuario';
import { alterarUsuario } from './alterarUsuario';
import { Adult } from './Adult';
import PromptSync = require('prompt-sync');
import { escolaridade } from './tratamendoDados';
const prompt = PromptSync();

const adultos: Adult[] = [];

let opcao: number = 0;
do{
    console.clear();
    console.log(`-=-= MENU PRINCIPAL =-=-`);
    console.log(`[1] Usuário`);
    console.log(`[2] Administrador`);
    console.log(`[3] Sair`);
    opcao = Number(prompt(`>> `));
    console.clear();
    switch(opcao){
        case 1:
            let escolha: number = 0;
            do{
                console.clear();
                console.log(`-=-= MENU USUÁRIO =-=-`);
                console.log(`[1] Adicionar`);
                console.log(`[2] Mostrar`);
                console.log(`[3] Alterar`);
                console.log(`[4] Excluir`);
                console.log(`[5] Sair`);
                escolha = Number(prompt('>> '));
                console.clear();
                switch(escolha){
                    case 1:
                        addUsuario(adultos);
                        let poderExcluir: boolean = true;
                        break;
                        
                    case 2:
                        mostrarUsuario(poderExcluir, adultos);
                        break;

                    case 3:
                        alterarUsuario(poderExcluir, adultos);
                        break;

                    case 4:
                        excluirUsuario(poderExcluir, adultos);
                        break;

                    case 5:
                        prompt('Saindo...');
                        break;

                    default:
                        console.log('[ERROR] Tente novamente!');
                        prompt('');
                }
            }while(escolha != 5);
            break;

        case 2:
            if(admLogin()){
                let escolha: number = 0;
                do{
                    console.clear();
                    console.log(`-=-= MENU ADMINISTRADOR =-=-`);
                    console.log(`[1] Listar`);
                    console.log(`[2] Excluir`);
                    console.log(`[3] Escolaridade`);
                    console.log(`[4] Sair`);
                    escolha = Number(prompt('>> '));
                    console.clear();
                    switch(escolha){
                        case 1:
                            listarUsuarios(adultos);
                            break;

                        case 2:
                            excluirLista(adultos);
                            break;

                        case 3:
                            escolaridade(adultos);
                            break;

                        case 4:
                            prompt('Saindo...');
                            break;

                        default:
                            console.log('[ERROR] Tente novamente!');
                            prompt('');
                    }
                }while(escolha != 4);
            }
            break;

        case 3:
            console.log('Saindo...');
            break;

        default:
            console.clear();
            prompt('[ERRO] Tente novamente!');
    }
}while(opcao != 3);