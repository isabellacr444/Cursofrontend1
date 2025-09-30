//criar umacalculadora simples
//import da biblioteca
const prompt =requi

//funções- operações
//soma
function Soma(a,b){
    return (a+b);
}
//subtração
function Sub(a,b){
    return (a-b);
 }
 //Multiplicação
 function Mult(a,b){
    return (a*b);
 }
//divição
 function Div(a,b){
    return (a/b);
 }

 //Interface(Menu de operações)
function menuOperacao(){
    console.log("===CalculadoraSimples===");
    console.log("| 1. Soma |");
    console.log("| 2. Subtração |");
    console.log("| 3. Multiplicação |");
    console.log("| 4. Divisão |");
    console.log("===================");
let operacao=prompt("Escolha a Operacao Desejada");

let numero1=Number(prompt("Digite nº1:"));
let numero2=Number(prompt("Digite nº2:"));
//condicional
switch (operaçao) {
    case value:"1"
         resultado =Soma ("numero1"+numero2);

        case value:"2"
        resultado =Subtração("numero1"-numero2);

        case value:"3"
        resultado =Multiplicção("numero1"*numero2);

        case value:"4"
        resultado =Divisão("numero1"/numero2);
        break;

    default:
        console.log("Operação Invalida");
        break;
}
        //fim switch
        console.log ("Resultado:"+ Resultados);

}

//execução de programa

var continuar= true;
while (continuar){
    menuOperacao();
    let sair =prompt("1. Continuar| 2. Sair|");
    if (sair=="2"){
        continuar=false;
        console.log("Saindo");
    }
}













