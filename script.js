let botonLogin = document.getElementById("btn-login");
let senhaLogin = document.getElementById("senhaLog");
let emailLogin = document.getElementById("emailLog");
let emailCad = document.getElementById("emailCad");
let nomeCad = document.getElementById("nomeCad");
let sobrenomeCad = document.getElementById("sobrenomeCad");
let senha1Cad = document.getElementById("senha1Cad");
let senha2Cad = document.getElementById("senha2Cad");
let botonCad = document.getElementById("btn-Cad");
let apresentacao = document.querySelector("apresenta");



function loginValidate(){
    if (emailLogin.value == "user@gmail.com" && senhaLogin.value == "123"  ){
    localStorage.setItem("acesso", true);

    window.location.href = "telauser.html";


    }
    //|| emailLogin.value == emailCad.value && senhaLogin.value == senha1Cad.value
    else{
    alert("usuário ou senha inválidos");
        }

}

function cadCliente(){
    if (senha1Cad.value != senha2Cad.value){
        alert("usuário ou senha inválidos")

    }
    else{
    localStorage.setItem("acesso", true);

    window.location.href = "index.html";

    }
}

let msgTelauser = document.querySelector("#apresent")
//apresentacao.textContent = (" seja bem vindo" + nomeCad.value + sobrenomeCad.value);

let mensagemBom = document.createElement("sss");
//mensagemBom.classList.add('msgi');
mensagemBom.innerText = `Olá ${nomeCad.value} ${sobrenomeCad.value} Seja bem vindo 
aqui você irá adquirir os melhores produtos digitais do mercado
com toda assistencia e qualidade que a mmmm tem para lhe proporcionar`;

msgTelauser.appendChild(mensagemBom);

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