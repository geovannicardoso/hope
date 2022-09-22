"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admLogin = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function admLogin() {
    var senha;
    do {
        console.clear();
        senha = prompt('Digite sua senha: ');
        if (senha == 'adm123') {
            return true;
        }
        else {
            console.log('[ERROR] Digite novamente!');
            var escolha = prompt('Deseja tentar novamente? (S/N) ');
            if (escolha == 'n' || escolha == 'N') {
                return false;
            }
        }
    } while (senha != 'adm123');
}
exports.admLogin = admLogin;
