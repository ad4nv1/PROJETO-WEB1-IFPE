// IDS importadas dos arquivos




let apresentacao = document.querySelector("apresenta");





// --------------**TELA DE CADASTRO**----------




/* VALIDAÇÃO PARA TELA DE CADASTRO EM ANDAMENTO 
function validacaoCadastro(){
  
  

  let dados = JSON.parse(localStorage.getItem("dadosDoUsuario"));

  if(dados == null){
    localStorage.setItem("dadosDoUsuario", "[]");
    dados = [];

  }
  let registrosUsuarios = {

    email = emailCad.value,
    senha = senha2Cad.value

  }

  dados.push(registrosUsuarios);

  localStorage.setItem("dadosDoUsuario", JSON.stringify(dados));
  alert("Cadastro concluido com sucesso");

  emailCad.value = "";
  senha2Cad.value = "";

}

*/
let emailCad = document.getElementById("emailCad");
let senha2Cad = document.getElementById("senha2Cad");
let nomeCad = document.getElementById("nomeCad");
let sobrenomeCad = document.getElementById("sobrenomeCad");
let senha1Cad = document.getElementById("senha1Cad");
let botonCad = document.getElementById("btn-Cad");


function cadCliente(){
  if (senha1Cad.value != senha2Cad.value){
      alert("usuário ou senha inválidos")

  }
  else{
  localStorage.setItem("acesso", true);

  window.location.href = "index.html";

  }
  localStorage.setItem("emailLoginCliente", emailCad.value);
  localStorage.setItem("senhaLoginCliente", senha2Cad.value);
}






// --------------**TELA DE LOGIN**----------
let botonLogin = document.getElementById("btn-login");
let senhaLogin = document.getElementById("senhaLog");
let emailLogin = document.getElementById("emailLog");

function loginValidate(){

    var emailcadastrado = localStorage.emailLoginCliente;
    var senhacadastrada = localStorage.senhaLoginCliente;

    if (emailLogin.value==emailcadastrado && senhaLogin.value == senhacadastrada ){
    localStorage.setItem("acesso", true);

    window.location.href = "telauser.html";


    }
    //else if(emailLogin.value===localStorage.getItem("emailLoginCliente" && senhaLogin.value === localStorage.getItem("senhaLoginCliente") {
     // window.location.href = "telauser.html";
   // }
    else {
    alert("usuário ou senha inválidos");
        }

}

// --------------**TELA DE CLIENTE**----------



/*

let msgTelauser = document.querySelector("#apresent")
//apresentacao.textContent = (" seja bem vindo" + nomeCad.value + sobrenomeCad.value);

let mensagemBom = document.createElement("sss");
//mensagemBom.classList.add('msgi');
mensagemBom.innerText = `Olá Seja bem vindo 
aqui você irá adquirir os melhores produtos digitais do mercado
com toda assistencia e qualidade que a mmmm tem para lhe proporcionar`;

msgTelauser.appendChild(mensagemBom);

*/


//recursos importados do html
let btnsalvarEdicao = document.getElementById("btn-salvarEdicao");
let editar = document.getElementById("editarTela");

let btnShowEdition = document.getElementById("btn-ShowEdition");
let radioCorfucinza = document.getElementById("radio-Corfucinza");
let radioCorfuverde = document.getElementById("radio-Corfuverde");
let radioCorfurosa = document.getElementById("radio-Corfurosa");
let radioCorfuazul = document.getElementById("radio-Corfuazul");
let radioCorfobranca = document.getElementById("radio-Corfobranca");
let radioCorfopreta = document.getElementById("radio-Corfobranca");
let boasVindas = document.getElementById("boasVindas");

//declaração de variaveis
var corFontes, corFundos;


// salvar no localStorage as opções marcadas
function salvarEdicao(){

 localStorage.setItem("corfun", corFundos);
 localStorage.setItem("corfon", corFontes);
 localStorage.setItem("nome", nomeClien.value);
 editar.style.display="none"

}

//cor do fundo
function corFundo(cor){

  document.body.style.backgroundColor=cor;
  corFundos = cor;

}


//cor da fonte
function corFonte(cor){

  document.body.style.color=cor;
  corFontes = cor;

}



//botao para aparecer a tela
function editarTe(){

  editar.style.display="block"

}
function entrada(){
  let nomeClien = document.getElementById("Cnome");
  if(localStorage.nome){
    corFontes=localStorage.corfon;
    corFundos=localStorage.corfun;
    nomeClien.value=localStorage.nome;
    corFonte(corFontes);
    corFundo(corFundos);
    boasVindas.innerHTML="Bem vindo "+ nomeClien.value+"<hr>";
}

}
 window.addEventListener("load", entrada);




// --------------**TELA DE inicio mesmo**----------

let containerr = document.getElementById("containerr");
let btnshowEmpresa = document.getElementById("btn-showEmpresa");
let btnencaminhaLog = document.getElementById("btn-encaminhaLog");

function showLogin(){

  containerr.style.display="block"

}

function encaminharLog(){

  window.location.href = "index.html";


}








     // ** IGNORA O QUE TA DAQUI P BAIXO ** (LOUCURA PESSOAL QUE VOU TENTAR MAIS TARDE)
 //class ValidarLogin {
  //   constructor(){
    //     this.validarLog = [
//
  //       ]

   //  }
     //inicia a validação dos campos de login e senha
   //  validacao(login) {
  //       let inputt = login.getElementsByTagName('input');
//
         //pegar os elementos e transformar em um array
  //       let arraydoLogin = [...inputt];
        //loop dos inputs
 //        arraydoLogin.forEach(function(input) {
 //            console.log(input);

  //       });
         
          
   //  }
// }
 
 //let login = document.getElementById("loginInicio");
// let botonLogin = document.getElementById("btn-login");
 //let validarLogin = new ValidarLogin();

 //botonLogin.addEventListener('click', function(e) {
    // e.preventDefault();
   //  validarLogin.validacao(login);
 //});






  // ||    \\
//let nomeUsuário = "kleberrson";
//let senhaUsuário = "123";



//if (nome === "user" && senha === "123");
  //  function deuCerto(){
  //      window.location.href ="confir.html";
  //  }

  //if (senhaLogin.getItem)
//botonLogin.addEventListener('click', function(e) {
    // e.preventDefault();
  //window.location.href ="confir.html";