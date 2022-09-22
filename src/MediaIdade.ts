
import {Adult} from"./Adult";
 function mediaIdade  (pessoas : Adult[]): number{
    let idade: number = 0;

    for (let i = 0; i < pessoas.length; i++) {
       idade += pessoas[i].idade;
    }
    let mediaIdade = idade / pessoas.length;
    return mediaIdade;
 }

export {mediaIdade}
