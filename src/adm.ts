import PromptSync = require('prompt-sync');
const prompt = PromptSync();

function admLogin(){
    let senha: string;
    do{
        console.clear();
        senha = prompt('Digite sua senha: ');
        if(senha == 'adm123'){
            return true;
        }
        else{
            console.log('[ERROR] Digite novamente!');
            let escolha = prompt('Deseja tentar novamente? (S/N) ');
            if(escolha == 'n' || escolha == 'N'){
                return false;
            }
        }
    }while(senha != 'adm123');
}
export{admLogin};