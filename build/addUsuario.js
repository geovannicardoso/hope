"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUsuario = void 0;
var Adult_1 = require("./Adult");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function addUsuario() {
    var idade = Number(prompt('Idade:'));
    var local = prompt('Local:');
    var nome = prompt('Nome:');
    var nivelDeEscolaridade = prompt('nivelDeEscolaridade:');
    var filhos = Number(prompt('filhos:'));
    var cpf = Number(prompt('cpf:'));
    var adulto = new Adult_1.Adult(idade, local, nome, nivelDeEscolaridade, filhos, cpf);
    prompt('Usuário adicionado!');
    return adulto;
}
exports.addUsuario = addUsuario;
