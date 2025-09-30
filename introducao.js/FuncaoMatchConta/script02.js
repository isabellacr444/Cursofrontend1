//Funções de texto (String)

let texto ="Aula de JavaScript";

//contar os caracteres(length)
console.log(texto.length)//18

//MAIÚSCULAS e minusculas
console.log(texto.toUpperCase());//MA
console.log(texto.toLowerCase());//mi

//Partes do texto
//subtring(inicial,fim)
console.log(texto.substring(0,4));//4

//Slice()
console.log(texto.slice(-10));//JavaS

//Substituindo para do texto
console.log(texto.replace("JavaScript", "Type")); 

//Tesoura(Trin)-Somente fim e começo da palavra
let texto1 = "   JavaScript   " ;
console.log(texto1);//"   JavaScript   "
console.log(texto1.trim);

//Separar o texto(split)
let linguagens = "JavaScript, Python, Java, PHP, C#";
let vetorlinguagens = linguagens.split(",");
console.log(linguagens); 
console.log(vetorlinguagens); 

//Desafio 
let caracteres ="Bom Dia Com Alegria";
let caracteresSemEspaco=caracteres.replaceAll(" ","");
console.log(caracteres);
console.log(caracteres.length);
console.log(caracteresSemEspaco);
console.log(caracteresSemEspaco.length);



