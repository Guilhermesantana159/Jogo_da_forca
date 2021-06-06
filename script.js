var palavras = ["teclado","monitor","controle","computador","impressora","ferrari","compass",
"mustang","bugati","koenigsegg","Lamborghini","banana","morango","abacate","melancia","geladeira","relogio","camisa","lapiseira","caneta"];
var descrição = ["Dispositivo de entrada/saida do computador","Dispositivo de entrada/saida do computador","Item usado em um videogame","Item tecnológico","Utiliza papel para funcionar","Marca de carro","Carro da marca jeep","Carro da marca Ford","Marca de carro","Marca de carro",
"Marca de carro","Uma fruta","Sabor de trento","Uma fruta","Umaa fruta","Um eletrodoméstico",
"Usado no pulso","Vestuário","Utilizado para escrever","Utilizado para escrever"];
var pontuação = 0;
var erros = []
var y = 0;

alert("Bem vindo ao jogo da forca, utilize a caixa de texto junto com o botão para enviar a letra. O jogo começa com pontuação zero e a cada palavra acertada recebe + 1 de pontuação e a cada palavra errada recebe - 1 de pontuação. Aperte nova palavra para ir pra próxima palavra. Bom jogo :)")

document.getElementById("nome").innerHTML = prompt("Digite o seu nome :");
function  seleção(){
    let x = Math.round((Math.random() * 10) + (Math.random() * 10));
    let palavra = palavras [x]; 
    let cont = 0;    
    document.getElementById("texto-dica").innerHTML = descrição[x];
    for(cont;cont<12;1){
        document.getElementById(cont).style.opacity = 0;
        document.getElementById(cont).value = "";
        cont = cont + 1;
    }
    cont = 0; 
    for(cont;cont<palavra.length;1){   
        document.getElementById(cont).style.opacity = 1;
        cont = cont + 1 ; 
    }   
    return pos = x;
}
function dica(){
    let x = document.getElementById("texto-dica").style.opacity;
    
    if (x == 0){
        document.getElementById("texto-dica").style.opacity = 1 ;
    }else{
        document.getElementById("texto-dica").style.opacity = 0 ;
    }
}

function enviar(){
    let resposta_aluno = String(document.getElementById("resposta").value).toLowerCase();
    let z = palavras[pos].search(resposta_aluno);
    let cont = 0 ;
    let x = document.getElementsByTagName("IMG");
    if(z == -1){
        if(erros.indexOf(resposta_aluno) >= 0){
            alert("Letra já digitada!")
            document.getElementById("resposta").value = "";
        }else{
            x[erros.length].style.opacity = "1";
            erros.push(resposta_aluno);
            document.getElementById("letras-erradas").innerHTML = erros;
            document.getElementById("resposta").value = "";
        }
    }else{
        for(cont;cont<palavras[pos].length;1){ 
            let x = palavras[pos].slice(cont,cont + 1);
            if(x==resposta_aluno){
                document.getElementById(cont).value = x;
                document.getElementById("resposta").value = "";
            }
            cont = cont + 1;
        }   
    }
    resultado();   
}

function resultado(){
    let z = document.getElementsByClassName("letra");
    for(i=0;i<palavras[pos].length;i++){
        if(z[i].value == palavras[pos].slice(y,y + 1)){
            y = y + 1;  
        }
    }
    if(y == palavras[pos].length){
        alert("Você Ganhou :)"); 
        erros = [];
        document.getElementById("letras-erradas").innerHTML = erros;
        document.getElementById("pontuação").innerHTML = pontuação = pontuação + 1;
        let x = document.getElementsByTagName("IMG");
        let cont;
        for(cont = 0;cont<x.length;cont++){
            x[cont].style.opacity = "0";
        }
        y = 0;
        seleção();
    }       
    if(erros.length == 6){
        alert("Você Perdeu :/")
        alert("A palavra correta seria:" + " " + palavras[pos])
        erros = []
        document.getElementById("letras-erradas").innerHTML = erros;
        document.getElementById("pontuação").innerHTML = pontuação = pontuação - 1;
        let x = document.getElementsByTagName("IMG");
        let cont;
        for(cont = 0;cont<x.length;cont++){
            x[cont].style.opacity = "0";
        }
        seleção();
    }
}