function SubmitEvent(){
    const inputNome = document.getElementById("input-nome").value
    const inputEmail = document.getElementById("input-email").value
    const inputTelefone = document.getElementById("input-telefone").value
    const inputMensagem = document.getElementById("input-mensagem").value
    const enviar = document.getElementById("enviar");

    if(inputNome === ""){
        bordaVermelha("nome", "container-name");
    } else {
        bordaVerde("nome", "container-name");
    }
    if(inputEmail === ""){
        bordaVermelha("email", "container-email");
    } else {
        bordaVerde("email", "container-email");
    }
    if(inputTelefone === ""){
        bordaVermelha("telefone", "container-telefone");
    } else {
        bordaVerde("telefone", "container-telefone");
    }
    if(inputMensagem === ""){
        bordaVermelha("mensagem", "container-mensagem");
    } else {
        bordaVerde("mensagem", "container-mensagem");
    }

    // console.log(inputNome)
    // console.log(inputEmail)
    // console.log(inputTelefone)
    // console.log(inputMensagem)
}

function bordaVerde(className, id){
    const getDiv = document.getElementById(id);
    getDiv.classList.remove(id.split('-')[1]);
    getDiv.classList.remove(className);
    getDiv.classList.add("green");

    if(className.indexOf('mensagem') > -1) {
        getDiv.classList.add("mensagem-green");
    } else {
        getDiv.classList.add("green");
    }
}

function bordaVermelha(className, id){
    const getDiv = document.getElementById(id);
    getDiv.classList.remove(id.split('-')[1]);
    getDiv.classList.remove(className);

    if(className.indexOf('mensagem') > -1) {
        getDiv.classList.add("mensagem-red");
    } else {
        getDiv.classList.add("red");
    }

    const getSpan = document.getElementById(`validador-${className}-off`)
    getSpan.classList.remove(`validador-${className}-off`);
   
}
