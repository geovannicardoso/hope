"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuario = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function usuario() {
    var escolha = 0;
    do {
        console.clear();
        console.log("-=-= MENU USU\u00C1RIO =-=-");
        console.log("[1] Adicional");
        console.log("[2] Administrador");
        prompt('>> ');
        switch (escolha) {
            case 1: //TODO: opção 1 usuário
                break;
            case 2: //TODO: opção 2 usuário
                break;
            case 3: //TODO: opção 3 usuário
                break;
            default:
                console.log('[ERROR] Tente novamente!');
                prompt();
        }
    } while (escolha < 1 || escolha > 3);
}
exports.usuario = usuario;
