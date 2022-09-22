"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaIdade = void 0;
function mediaIdade(pessoas) {
    var idade = 0;
    for (var i = 0; i < pessoas.length; i++) {
        idade += pessoas[i].idade;
    }
    var mediaIdade = idade / pessoas.length;
    return mediaIdade;
}
exports.mediaIdade = mediaIdade;
