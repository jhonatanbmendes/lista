function buscar() {
    let input = document.getElementById('pesquisa').value;
    input = input.toLowerCase();
    let resultado = document.getElementsByClassName('escola');
    let item = document.getElementsByClassName('item');

    console.log(resultado);
    console.log(resultado.length);

    for (i = 0; i < resultado.length; i++) {
        if (resultado[i].innerHTML.toLowerCase().includes(input)) {
            item[i].style.display = "grid";
            
        } else {
            item[i].style.display = "none";
        }
    }

}

function alerta(){
    alert('Por favor, informe seu nome, telefone e escola.');
}

