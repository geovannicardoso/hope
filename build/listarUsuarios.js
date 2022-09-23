"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarUsuarios = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function listarUsuarios(adultos) {
    for (var i = 0; i < adultos.length; i++) {
        console.log();
        console.log(adultos[i].idade);
        console.log(adultos[i].local);
        console.log(adultos[i].nome);
        console.log(adultos[i].nivelDeEscolaridade);
        adultos[i].filhos();
        adultos[i].cpf();
    }
    prompt('Usuários listados!');
}
exports.listarUsuarios = listarUsuarios;
