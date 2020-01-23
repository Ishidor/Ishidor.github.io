let select = document.getElementById("select"),
    arr = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement("OPTION"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    select.insertBefore(option, select.lastChild);
}

document.getElementById("date").DatePickerX.init({format:'dd/mm/yyyy'});
validation.init();
validation.highlight();

let submit = document.getElementById("submit");
submit.addEventListener("click", function(event){
    event.preventDefault();
  

})

function showInput() {
    document.getElementById('display').innerHTML =
        document.getElementById("wholeForm").innerText;
}