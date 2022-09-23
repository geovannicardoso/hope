"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escolaridade = void 0;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function escolaridade(adultos) {
    var naosa = [0, 0, 0, 0, 0];
    var fund = [0, 0, 0, 0, 0];
    var medio = [0, 0, 0, 0, 0];
    var sup = [0, 0, 0, 0, 0];
    for (var i = 0; i < adultos.length; i++) {
        if (adultos[i].nivelDeEscolaridade == 1) { // indice 0
            naosa[0]++;
            if (adultos[i].local == 'Zona central') { //indice 1
                naosa[1]++;
            }
            else if (adultos[i].local == 'Zona Norte') { // indice 2
                naosa[2]++;
            }
            else if (adultos[i].local == 'Zona Sul') { // indice 3
                naosa[3]++;
            }
            else if (adultos[i].local == 'Zona Oeste') { // indice 4
                naosa[4]++;
            }
        }
        else if (adultos[i].nivelDeEscolaridade == 2) { //indice 0
            fund[0]++;
            if (adultos[i].local == 'Zona central') { //indice 1
                fund[1]++;
            }
            else if (adultos[i].local == 'Zona Norte') { // indice 2
                fund[2]++;
            }
            else if (adultos[i].local == 'Zona Sul') { // indice 3
                fund[3]++;
            }
            else if (adultos[i].local == 'Zona Oeste') { // indice 4
                fund[4]++;
            }
        }
        else if (adultos[i].nivelDeEscolaridade == 3) { //indice 0
            medio[0]++;
            if (adultos[i].local == 'Zona central') { //indice 1
                medio[1]++;
            }
            else if (adultos[i].local == 'Zona Norte') { // indice 2
                medio[2]++;
            }
            else if (adultos[i].local == 'Zona Sul') { // indice 3
                medio[3]++;
            }
            else if (adultos[i].local == 'Zona Oeste') { // indice 4
                medio[4]++;
            }
        }
        else if (adultos[i].nivelDeEscolaridade == 4) { //indice 0
            sup[0]++;
            if (adultos[i].local == 'Zona central') { //indice 1
                sup[1]++;
            }
            else if (adultos[i].local == 'Zona Norte') { // indice 2
                sup[2]++;
            }
            else if (adultos[i].local == 'Zona Sul') { // indice 3
                sup[3]++;
            }
            else if (adultos[i].local == 'Zona Oeste') { // indice 4
                sup[4]++;
            }
        }
    }
    console.log("Quantidade pessoa que concluiram o ensino superio: ".concat(sup[0]));
    for (var i = 1; i < naosa[0]; i++) {
        naosa[i] = (naosa[i] * 100) / naosa[0];
    }
    for (var i = 1; i < fund[0]; i++) {
        fund[i] = (fund[i] * 100) / fund[0];
    }
    for (var i = 1; i < medio[0]; i++) {
        medio[i] = (medio[i] * 100) / medio[0];
    }
    for (var i = 1; i < sup[0]; i++) {
        sup[i] = (sup[i] * 100) / sup[0];
    }
    console.log("Total de pessoas que concluiram o ensino superior: ".concat(sup[0]));
    console.log(sup[1]);
    console.log(sup[2]);
    console.log(sup[3]);
    prompt('');
}
exports.escolaridade = escolaridade;
