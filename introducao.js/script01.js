//Estrutura de dados

//Condicionais (if else,switch case)

var precoProduto =150;

if (precoProduto100){
    console.log("Valor a Pagar:" +(precoProduto*0.5));//100 de

}else{
    console.log("Valor a pagar:" +(precoProduto));
}

//Switch case 

switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
        case 2:
            console.log("Fevereiro")
            break;
    case 3:
        console.log("Março")
        break;
 
        default:
            console.log("Outro Mês")
            break;
}

//Laços de repetição (For;)
for(let i=0;ix=100; i+0){
 console.log(i)

}
//while (consolidanal)
var numeroEscolhido =4;
var continuar =true
var contador =0
while(continuar){
    contador++;
    let numeroSorteado=Math.round(Math.random()*10);//sortear um nº entre 0 e 10
    if (numeroEscolhido=numeroSorteado){
    console.log("Acertou!!!")
    console.log("Nº de Tentativas:"+contador);
        continuar=false;
    }
} 

//Funções -(void //return)
//function return
function ola(nome){//parametro
    return "Olá, "+nome+"Seja Bem-Vindo"
}
console.log("Turma A");

//Function void
function hello(nome){
console.log("Hello:"+nome);
}
hello("Turma A");
