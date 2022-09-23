"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adm_1 = require("./adm");
var addUsuario_1 = require("./addUsuario");
var mostrarUsuario_1 = require("./mostrarUsuario");
var listarUsuarios_1 = require("./listarUsuarios");
var excluirLista_1 = require("./excluirLista");
var excluirUsuario_1 = require("./excluirUsuario");
var alterarUsuario_1 = require("./alterarUsuario");
var PromptSync = require("prompt-sync");
var tratamendoDados_1 = require("./tratamendoDados");
var prompt = PromptSync();
var adultos = [];
var opcao = 0;
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
                        (0, addUsuario_1.addUsuario)(adultos);
                        var poderExcluir = true;
                        break;
                    case 2:
                        (0, mostrarUsuario_1.mostrarUsuario)(poderExcluir, adultos);
                        break;
                    case 3:
                        (0, alterarUsuario_1.alterarUsuario)(poderExcluir, adultos);
                        break;
                    case 4:
                        (0, excluirUsuario_1.excluirUsuario)(poderExcluir, adultos);
                        break;
                    case 5:
                        prompt('Saindo...');
                        break;
                    default:
                        console.log('[ERROR] Tente novamente!');
                        prompt('');
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
                    console.log("[3] Escolaridade");
                    console.log("[4] Sair");
                    escolha_1 = Number(prompt('>> '));
                    console.clear();
                    switch (escolha_1) {
                        case 1:
                            (0, listarUsuarios_1.listarUsuarios)(adultos);
                            break;
                        case 2:
                            (0, excluirLista_1.excluirLista)(adultos);
                            break;
                        case 3:
                            (0, tratamendoDados_1.escolaridade)(adultos);
                            break;
                        case 4:
                            prompt('Saindo...');
                            break;
                        default:
                            console.log('[ERROR] Tente novamente!');
                            prompt('');
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
