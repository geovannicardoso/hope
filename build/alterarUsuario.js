"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterarUsuario = void 0;
var addUsuario_1 = require("./addUsuario");
var mostrarUsuario_1 = require("./mostrarUsuario");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function alterarUsuario(poderExcluir, adultos) {
    if (poderExcluir) {
        (0, mostrarUsuario_1.mostrarUsuario)(poderExcluir, adultos);
        var alterar = prompt('Deseja alterar este usuário? (S/N)');
        if (alterar == 'S' || alterar == 's') {
            adultos.pop();
            console.log('Usuário apagado! Digite as alterações: ');
            (0, addUsuario_1.addUsuario)(adultos);
        }
        else {
            prompt('alteração cancelada!');
        }
    }
    else {
        prompt('[ERROR] Usuário já foi excluido!');
    }
}
exports.alterarUsuario = alterarUsuario;
