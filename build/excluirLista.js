"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirLista = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function excluirLista(adultos) {
    for (var i = 0; i < adultos.length; i++) {
        console.log();
        console.log("ID: ".concat(i));
        console.log(adultos[i].idade);
        console.log(adultos[i].local);
        console.log(adultos[i].nome);
        console.log(adultos[i].nivelDeEscolaridade);
        adultos[i].filhos();
        adultos[i].cpf();
    }
    var certeza = prompt('Você tem certeza? (S/N) ');
    if (certeza == 's' || certeza == 'S') {
        var id = Number(prompt('Digite o ID aqui >> '));
        adultos.splice(id, 1);
        prompt('Usuário excluido!');
    }
    else {
        prompt('operação cancelada!');
    }
}
exports.excluirLista = excluirLista;
