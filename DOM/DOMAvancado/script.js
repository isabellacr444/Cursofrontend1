// Manipulando Html e CSS pelo JavaScript -> DOM Avançado

// vamos criar um Header -> DOM
let header = document.createElement("header");
header.style.backgroundColor = "black";
header.style.color = "aliceblue";
header.style.textAlign = "center";
header.style.height = "8vh";
header.style.width = "100%";
document.body.appendChild(header);//adicionando header -> body
document.body.style.margin = 0;

//adicionar uma NavBar no Header
let navBar = document.createElement("div");
navBar.style.display = "flex";
navBar.style.justifyContent = "space-around";
navBar.style.alignItems = "center";
navBar.style.height = "100%";
navBar.style.width = "100%";
navBar.style.fontFamily = "Comic Sans MS";
navBar.style.fontSize = "4vh";
header.appendChild(navBar); //adicionar navBar -> header

//adicionar elementos a navBar
let menuItens = ["Home", "Sobre", "Produtos", "Contato"];

menuItens.forEach(item => {
    let a = document.createElement("a");
    a.innerText = item;
    navBar.appendChild(a);

    
});

// fazer o footer do site
let footer = document.createElement("footer");
footer.style.backgroundColor ="black";
footer.style.color ="aliceblue";
footer.style.height ="5vh";
footer.style.width ="100%";
footer.style.textAlign ="center";
footer.style.bottom ="0";
footer.style.position ="fixed";
document.body.appendChild(footer);//adicionar footer ->body

let navBarFooter =document.createElement("div");
navBarFooter.style.display ="flex";
navBarFooter.style.justifyContent ="space-between";
navBarFooter.style.fontFamily =
navBarFooter.style.fontFamily = "Comic Sans MS";
navBarFooter.style.fontSize = "2vh";
navBarFooter.style.width = "100%";
navBarFooter.style.height ="100%";
footer.appendChild(navBarFooter);//adicionar navbarfooter

// itensFooter
let footerItens = ["CopyRight \u00A9 2025", "DTB Software", "Rua Senai,1000 - Limeira/SP"];

footerItens.forEach(item =>{
    let p =document.createElement("p");
    p.innerText =item;
    navBarFooter.appendChild(p);
});


// Clonagem de Elementos no DOM
let btnClonar =document.createElement("button")
btnClonar.innerText ="Clonar";
document.body.appendChild(btnClonar);
//vriar os cards
let card =document.createElement("div");
card.style.width ="150px";
card.style.height="200px";
card.style.backgroundColor="black";
card.style.color ="aliceblue";
card.style.margin ="10px";

//containerCards
let containerCards =document.createElement("div");
containerCards.style.display = "flex";
containerCards.style.justifyContent = "center";
containerCards.style.flexWrap ="wrap";
containerCards.style.width ="90%";
containerCards.style.margin ="auto";

document.body.appendChild(containerCards);

//criar a funcao de clonagem(cloneNode)
btnClonar.addEventListener("click", () =>{
    let cardClone = card.cloneNode(true);
    containerCards.appendChild(cardClone);
});

//modificação de classes com classlist
let checkDarkMode =document.createElement("input");
checkDarkMode.type ="checkbox";
checkDarkMode.id ="darkMode";
let divDarkMode = document.createElement("div");
divDarkMode.style.display = "flex";
divDarkMode.style.justifyContent = "center";
divDarkMode.style.top ="10px";
divDarkMode.style.right ="10px";
divDarkMode.style.position ="absolute";
let p = document.createElement("p");
p.innerText ="Dark Mode";
p.style.color ="aliceblue";
divDarkMode.appendChild(p);
divDarkMode.appendChild(checkDarkMode);
document.body.appendChild(divDarkMode);

//funcionalidade do darkmode
checkDarkMode.addEventListener("change",()=>{
    document.body.classList.toggle("darkMode");
});
//eventos Avançados
//eventos de teclado 
document.addEventListener("keydown", (event)=>{
    console.log("Tecla Pressionada: " + event.key);
});
//eventos com teclado, imput com susgestão de pesquisa
let input =document.createElement("input");
input.type ="text";
input.placeholder ="Digite sua pesquisa";
input.id ="inputPesquisa";
document.body.appendChild(input);
let lista =document.createElement("ul");
lista.style.listStyle ="none";
lista.style.padding ="0";
lista.style.margin ="0";
lista.id ="listaPesquisa";
document.body.appendChild(lista);

let listaItens =["JavaScript", "HTML", "CSS", "React", "Angular", "Vue", "Node", "Npm"];
//metodo para susgestão de pesquisa
input.addEventListener("keyup",()=>{
    lista.innerHTML ="";
    listaItens.forEach(item =>{
        let termo = input.value.toLowerCase();
    if(item.toLowerCase().includes(termo)){
        let li =document.createElement("li");
        li.innerText =item;
        lista.appendChild(li);
        //adicionar a função de clicar na palavra
        li.style.cursor = "pointer";
        li.addEventListener("click",()=>{
            input.value =item;
            lista.innerHTML ="";
        })
    }
    })
});
//fazendo verificação de formulários
let form =document.createElement("form");
form.id ="formCadastro";
let inputNome =document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Informe o Nome";
form.appendChild(inputNome);
let inputEmail =document.createElement("input");
inputEmail.type ="email";
inputEmail.placeholder = "Informe o Email";
form.appendChild(inputEmail);
let inputSenha =document.createElement("input");
inputSenha.type ="password";
inputSenha.placeholder ="Informe a Senha";
form.appendChild(inputSenha);
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);
document.body.appendChild(form);

//validação do formulario 
let mensagens =document.createElement("p");
document.body.appendChild(mensagem);

form.addEventListener("submit", (event) =>{
    event.preventDefault();//não deixa o submit recarregar a tela
    let nome =inputNome.value;
    let email =inputEmail.value;
    let senha =inputSenha.value;
    if(nome ===""|| email ==="" || senha ===""){
        mensagem.innerText = " Todos os Campos Devem Ser Preenchidos";
        mensagem.style.color = "red";
    }else{
        mensagem.innerText = "Cadastro Realizado com Sucesso";
        mensagem.style.color = "green";
        nome = "";
        email = "";
        senha ="";
        form.reset();
    } 
});









