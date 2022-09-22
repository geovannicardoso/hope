"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adm_1 = require("./adm");
var addUsuario_1 = require("./addUsuario");
var mostrarUsuario_1 = require("./mostrarUsuario");
var listarUsuarios_1 = require("./listarUsuarios");
var excluirLista_1 = require("./excluirLista");
var MediaIdade_1 = require("./MediaIdade");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var opcao = 0;
var adultos = [];
do {
    console.clear();
    console.log("-=-= MENU PRINCIPAL =-=-");
    console.log("[1] Usu\u00E1rio");
    console.log("[2] Administrador");
    console.log("[3] Sair");
    opcao = Number(prompt(">> "));
    console.clear();
    switch (opcao) {
        case 1:
            var escolha = 0;
            do {
                console.clear();
                console.log("-=-= MENU USU\u00C1RIO =-=-");
                console.log("[1] Adicionar");
                console.log("[2] Mostrar");
                console.log("[3] Alterar");
                console.log("[4] Excluir");
                console.log("[5] Sair");
                escolha = Number(prompt('>> '));
                console.clear();
                switch (escolha) {
                    case 1:
                        adultos.push((0, addUsuario_1.addUsuario)());
                        var poderExcluir = true;
                        break;
                    case 2:
                        (poderExcluir) ? (0, mostrarUsuario_1.mostrarUsuario)(adultos) : prompt('[ERROR] Usuário já excluido!');
                        prompt('');
                        break;
                    case 3:
                        if (poderExcluir) {
                            (0, mostrarUsuario_1.mostrarUsuario)(adultos);
                            var alterar = prompt('Deseja alterar este usuário? (S/N)');
                            if (alterar == 'S' || alterar == 's') {
                                adultos.pop();
                                console.log('Usuário apagado! Digite as alterações: ');
                                adultos.push((0, addUsuario_1.addUsuario)());
                            }
                            else {
                                prompt('alteração cancelada!');
                            }
                        }
                        else {
                            prompt('[ERROR] Usuário já foi excluido!');
                        }
                        break;
                    case 4:
                        if (poderExcluir) {
                            (0, mostrarUsuario_1.mostrarUsuario)(adultos);
                            var excluir = prompt('Deseja excluir esse usuário? (S/N)');
                            if (excluir == 'S' || excluir == 's') {
                                adultos.pop();
                                poderExcluir = false;
                                prompt('usuário excluido com sucesso!');
                            }
                            else {
                                prompt('Exclusão cancelada!');
                            }
                        }
                        else {
                            prompt('[ERROR] Usuário já foi excluido!');
                        }
                        break;
                    case 5:
                        prompt('Saindo...');
                        break;
                    default:
                        console.log('[ERROR] Tente novamente!');
                        prompt();
                }
            } while (escolha != 5);
            break;
        case 2:
            if ((0, adm_1.admLogin)()) {
                var escolha_1 = 0;
                do {
                    console.clear();
                    console.log("-=-= MENU ADMINISTRADOR =-=-");
                    console.log("[1] Listar");
                    console.log("[2] Excluir");
                    console.log("[3] Media idade");
                    console.log("[4] Saida");
                    escolha_1 = Number(prompt('>> '));
                    console.clear();
                    switch (escolha_1) {
                        case 1:
                            (0, listarUsuarios_1.listarUsuarios)(adultos);
                            break;
                        case 2:
                            adultos.splice((0, excluirLista_1.excluirLista)(adultos), 1);
                            prompt('Usuário excluido!');
                            break;
                        case 3:
                            console.log("Media de idade dos usuarios \u00E9: ".concat((0, MediaIdade_1.mediaIdade)(adultos)));
                            prompt();
                            break;
                        case 4:
                            prompt('Saindo...');
                            break;
                        default:
                            console.log('[ERROR] Tente novamente!');
                            prompt();
                    }
                } while (escolha_1 != 4);
            }
            break;
        case 3:
            console.log('Saindo...');
            break;
        default:
            console.clear();
            prompt('[ERRO] Tente novamente!');
    }
} while (opcao != 3);
