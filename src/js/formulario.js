// Teste nao sucedido

// const containerFormulario = document.querySelectorAll('.container')
// const botaoEnviar = document.querySelector('.btn-enviar')

// botaoEnviar.addEventListener('click', (e) => {
//     e.preventDefault()

//     containerFormulario.forEach((input)=>{
//         if (input.value){
//             input.classList.add('valido')
//             input.nextElementSibling.classList.add('mostrar')
//         } else{
//             input.classList.remove('valido')
//             input.classList.add('erro')
//             input.nextElementSibling.classList.add('mostrar')
//         }
//     });
// })




function SubmitEvent(){
    const inputNome = document.getElementById("input-nome").value
    const inputEmail = document.getElementById("input-email").value
    const inputTelefone = document.getElementById("input-telefone").value
    const textareaMensagem = document.getElementById("textarea-mensagem").value
    const enviar = document.getElementById("btn-enviar");

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
    if(textareaMensagem === ""){
        bordaVermelha("mensagem", "container-mensagem");
    } else {
        bordaVerde("mensagem", "container-mensagem");
    }
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
    const getSpan = document.getElementById(`validador-${className}-off`)
    getSpan.classList.add(`validador-${className}-off`);
    
}

function bordaVermelha(className, id){
    const getDiv = document.getElementById(id);
    getDiv.classList.remove(id.split('-')[1]);
    getDiv.classList.remove(className);

    if(className.indexOf('mensagem') > -1) {
        getDiv.classList.remove("mensagem-green")
        getDiv.classList.remove("green")
        getDiv.classList.add("mensagem-red");
    } else {
        getDiv.classList.remove("green")
        getDiv.classList.add("red");
    }

    const getSpan = document.getElementById(`validador-${className}-off`)
    getSpan.classList.remove(`validador-${className}-off`);
   
}
