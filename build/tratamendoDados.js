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
    for (var i = 1; i <= naosa[0]; i++) {
        naosa[i] = (naosa[i] * 100) / naosa[0];
        fund[i] = (fund[i] * 100) / fund[0];
        medio[i] = (medio[i] * 100) / medio[0];
        sup[i] = (sup[i] * 100) / sup[0];
    }
    console.clear();
    console.log("\nTotal de pessoas sem escolaridade: ".concat(naosa[0]));
    console.log('Zona central: ' + naosa[1].toFixed(0) + '%');
    console.log('Zona Norte: ' + naosa[2].toFixed(0) + '%');
    console.log('Zona Sul: ' + naosa[3].toFixed(0) + '%');
    console.log('Zona Oeste: ' + naosa[4].toFixed(0) + '%');
    console.log("\nTotal de pessoas que concluiram o ensino fundamental: ".concat(fund[0]));
    console.log('Zona central: ' + fund[1].toFixed(0) + '%');
    console.log('Zona Norte: ' + fund[2].toFixed(0) + '%');
    console.log('Zona Sul: ' + fund[3].toFixed(0) + '%');
    console.log('Zona Oeste: ' + fund[4].toFixed(0) + '%');
    console.log("\nTotal de pessoas que concluiram o ensino medio: ".concat(medio[0]));
    console.log('Zona central: ' + medio[1].toFixed(0) + '%');
    console.log('Zona Norte: ' + medio[2].toFixed(0) + '%');
    console.log('Zona Sul: ' + medio[3].toFixed(0) + '%');
    console.log('Zona Oeste: ' + medio[4].toFixed(0) + '%');
    console.log("\nTotal de pessoas que concluiram o ensino superior: ".concat(sup[0]));
    console.log('Zona central: ' + sup[1].toFixed(0) + '%');
    console.log('Zona Norte: ' + sup[2].toFixed(0) + '%');
    console.log('Zona Sul: ' + sup[3].toFixed(0) + '%');
    console.log('Zona Oeste: ' + sup[4].toFixed(0) + '%');
    prompt('');
}
exports.escolaridade = escolaridade;
