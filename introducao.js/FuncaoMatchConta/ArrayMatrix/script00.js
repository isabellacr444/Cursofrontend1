//Arrays e Matrizes (vetores de matrix)
//declarar uma array

let array=[];
let numberArray=[1,2,3,4,5,6,7,8,9] ;
let textArray =["Sapato","Bola","Caixa"];
let mixArray=[1,"Nome" ,true];

//Como acessar os elementos(indice)
console.log(textArray(1));//Bola
console.log(numberArray(8));//9

//Para contar elementos de uma Array(length)
console.log(numberArray.leng0th);//9
console.log(textArray.length);//3

//Adicionar elementos em Array:
//no começo (0)
textArray.unshift("Cachorro");
console.log(textArray);

//no final(push)
textArray.push("Casa");
console.log(textArray);

//Alterar o valor de um elemento da Array
textArray[2] ="Carro";
console.log(textArray)

//remover elementos da array

//do começo(shift)
textArray.shift();//Cachorro
console.log(textArray);

//do meio(splice)-indice,+quantidade
textArray.splice(1,1);//Carro
console.log(textArray)


//do fim
textArray.pop();//Casa
console.log(textArray);

//Percorrer uma array

for (let i = 0; i < numberArray.length; i++) {
    console.log([i]);

}

numberArray.forEach(Element => {
    console.log(Element);
});

//o índice de um elemento 
console.log(mixArray.indexOf("Nome"));
console.log(numberArray.indexOf(20));






















































































































































































































