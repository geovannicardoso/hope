"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarUsuario = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function mostrarUsuario(poderExcluir, adultos) {
    if (poderExcluir) {
        console.log();
        console.log('Nome do usuário: ' + adultos[(adultos.length - 1)].nome);
        console.log('Idade: ' + adultos[(adultos.length - 1)].idade);
        adultos[(adultos.length - 1)].cpf();
        adultos[(adultos.length - 1)].filhos();
        console.log('Localidade: ' + adultos[(adultos.length - 1)].local);
        console.log('Nível de escolaridade: ' + adultos[(adultos.length - 1)].nivelDeEscolaridade);
        prompt('');
    }
    else {
        prompt('[ERROR] Usuário já excluido!');
    }
}
exports.mostrarUsuario = mostrarUsuario;
