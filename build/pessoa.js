"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Pessoa = /** @class */ (function () {
    function Pessoa(idade, local, nome, nivelDeEscolaridade) {
        this.nome = nome;
        this.local = local;
        this.idade = idade;
        this.nivelDeEscolaridade = nivelDeEscolaridade;
    }
    //TODO: retornar idade
    Pessoa.prototype.retorneIdade = function () {
        return this.idade;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
