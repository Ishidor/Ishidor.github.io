let select = document.getElementById("select"),
    arr = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement("OPTION"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    select.insertBefore(option, select.lastChild);
}

// function checker() {
//     let nome = document.forms["form"]["Nome"];
//     let email = document.forms["form"]["Email"];
//     let cpf = document.forms["form"]["Cpf"];
//     let endereco = document.forms["form"]["Endereço"];
//     let cidade = document.forms["form"]["Cidade"];
//     let estado = document.forms["form"]["Estado"];
//     let residencia = document.forms["form"]["Tipo"];
//     let resumo = document.forms["form"]["Resumo do Curriculo"];
//     let cargo = document.forms["form"]["Cargo"];
//     let descCargo = document.forms["form"]["Descricao do Cargo"];
//     let dataInicio = document.forms["form"]["Data de Inicio"];

//     if (nome.value == "") {
//         window.alert("Escreva seu nome.");
//         nome.focus();
//         return false;
//     }

//     if (address.value == "") {
//         window.alert("Escreva seu endereço.");
//         address.focus();
//         return false;
//     }

//     if (email.value == "") {
//         window.alert("Escreva um endereço de email válido.");
//         email.focus();
//         return false;
//     }

//     if (cpf.value == "") {
//         window.alert("Informe o seu CPF.");
//         cpf.focus();
//         return false;
//     }

//     if (endereco.selectedIndex < 1) {
//         alert("Informe o seu endereço.");
//         endereco.focus();
//         return false;
//     }

//     if (cidade.value == "") {
//         window.alert("Informe sua cidade");
//         cidade.focus();
//         return false;
//     }

//     if (estado.value == "") {
//         window.alert("Informe seu Estado");
//         estado.focus();
//         return false;
//     }

//     if (residencia.value == "") {
//         window.alert("Informe o tipo de sua residencia");
//         residencia.focus();
//         return false;
//     }

//     if (resumo.value == "") {
//         window.alert("Informe o resumo de seu currículo");
//         resumo.focus();
//         return false;
//     }

//     if (cargo.value == "") {
//         window.alert("Informe seu cargo");
//         cargo.focus();
//         return false;
//     }

//     if (descCargo.value == "") {
//         window.alert("Favor descrever seu Cargo");
//         descCargo.focus();
//         return false;
//     }

//     if (dataInicio.value == "") {
//         window.alert("Informe a data de início nesse cargo");
//         dataInicio.focus();
//         return false;
//     }

//     return true;
// }

let submit = document.getElementById("submit");
submit.addEventListener("click", function(event){
    event.preventDefault();
  

})

function showInput() {
    document.getElementById('display').innerHTML =
        document.getElementById("wholeForm").innerText.;
}