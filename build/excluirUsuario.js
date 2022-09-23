"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirUsuario = void 0;
var mostrarUsuario_1 = require("./mostrarUsuario");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function excluirUsuario(poderExcluir, adultos) {
    if (poderExcluir) {
        (0, mostrarUsuario_1.mostrarUsuario)(poderExcluir, adultos);
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
}
exports.excluirUsuario = excluirUsuario;
