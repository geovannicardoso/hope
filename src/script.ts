import { admLogin } from './adm';
import { addUsuario } from './addUsuario';
import { mostrarUsuario } from './mostrarUsuario';
import { listarUsuarios } from './listarUsuarios';
import { excluirLista } from './excluirLista';
import { Adult } from './Adult';
import { mediaIdade } from './MediaIdade';
import PromptSync = require('prompt-sync');
const prompt = PromptSync();

let opcao: number = 0;


const adultos: Adult[] = [];

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
                        adultos.push(addUsuario());
                        let poderExcluir: boolean = true;
                        break
                        
                    case 2:
                        (poderExcluir) ? mostrarUsuario(adultos) : prompt('[ERROR] Usuário já excluido!');
                        prompt('');
                        break

                    case 3:
                        if(poderExcluir){
                            mostrarUsuario(adultos);
                            let alterar = prompt('Deseja alterar este usuário? (S/N)');
                            if(alterar == 'S' || alterar == 's'){
                                adultos.pop();
                                console.log('Usuário apagado! Digite as alterações: ');
                                adultos.push(addUsuario());
                            }
                            else{
                                prompt('alteração cancelada!');
                            }
                        }
                        else{
                            prompt('[ERROR] Usuário já foi excluido!')
                        }
                        break

                    case 4:
                        if(poderExcluir){
                            mostrarUsuario(adultos);
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
                        break

                    case 5:
                        prompt('Saindo...');
                        break

                    default:
                        console.log('[ERROR] Tente novamente!');
                        prompt();
                }
            }while(escolha != 5);
            break

        case 2:
            if(admLogin()){
                let escolha: number = 0;
                do{
                    console.clear();
                    console.log(`-=-= MENU ADMINISTRADOR =-=-`);
                    console.log(`[1] Listar`);
                    console.log(`[2] Excluir`);
                    console.log(`[3] Media idade`);
                    console.log(`[4] Saida`);
                    
                    escolha = Number(prompt('>> '));
                    console.clear();
                    switch(escolha){
                        case 1:
                            listarUsuarios(adultos);
                            break

                        case 2:
                            adultos.splice(excluirLista(adultos), 1);
                            prompt('Usuário excluido!');
                            break
                        case 3:
                            console.log(`Media de idade dos usuarios é: ${mediaIdade(adultos)}`);
                            prompt();
                            break;
                        case 4:
                            prompt('Saindo...');
                            break

                        default:
                            console.log('[ERROR] Tente novamente!');
                            prompt();
                    }
                }while(escolha != 4);
            }
            break
        case 3:
            console.log('Saindo...');
            break

        default:
            console.clear();
            prompt('[ERRO] Tente novamente!');
    }
}while(opcao != 3);