"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarUsuario = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function mostrarUsuario(adultos) {
    console.log();
    console.log(adultos[(adultos.length - 1)].idade);
    console.log(adultos[(adultos.length - 1)].local);
    console.log(adultos[(adultos.length - 1)].nome);
    console.log(adultos[(adultos.length - 1)].nivelDeEscolaridade);
    adultos[(adultos.length - 1)].filhos();
    adultos[(adultos.length - 1)].cpf();
}
exports.mostrarUsuario = mostrarUsuario;
