"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirLista = void 0;
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
    var id = Number(prompt('Digite o ID aqui >> '));
    return id;
}
exports.excluirLista = excluirLista;
