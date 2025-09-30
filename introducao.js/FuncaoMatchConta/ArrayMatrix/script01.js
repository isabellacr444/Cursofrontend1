//Métodos avançados de Arrays
let numeros=[10, 20, 30, 40, 50];

//map: Cria um novo array baseado no original
let numerosDobro = numeros.map( x => x * 2);
console.log(numerosDobro); 

//Filter-percorrer e filtrar
let numerosFiltro =numeros.filter (x => 25);
console.log(numerosFiltro);

//combinar filter com map
let numerosFiltroDobro=numerosFilter(x=>35);
console.log(numFilterDobro);

//reduce =>array =>simples
//soma dos valores de um array
let soma =numeros.reduce((x,y)=> (x+y));
console.log(soma);




