const redLine = require('redLine').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se pode entrar no kart');
console.log('Alem das suas verificações, precisamos verificar se você está na lista de presença do horário');

redLine.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question('Voce tem habilitcao? (Sim/Nao', temHabilitacao => {
            if(!(temHabilitacao. toUpperCase() !== 'SIM')){
                console.log('voce nao tem habilitacao para o kart');   
            }else{
                readLine.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo ao kart Douglas')
                            break;
                        case 'Rafael' :
                            console.log('bem vindo ao kart Rafael')
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');    

                    }
                })
            }
        })
    }
    
})