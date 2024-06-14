lista = [{
    escola: "Escola Municipal Palmira de Castro Machado",
    nome01: "Antonia Araújo",
    tel01: "991154856",
    nome02: "Jhonatan Mendes",
    tel02: "991458485"
},
{
    escola: "",
    nome01: "",
    tel01: "",
    nome02: "",
    tel02: ""
},
{
    escola: "Escola Municipal Ioládio Batista",
    nome01: "João Almeida",
    tel01: "991154856",
    nome02: "",
    tel02: "991458485"
}];

lista = lista.
console.log(lista);

for (let i in lista) {

    let aux = `<section class="item"><div class="escola">` + lista[i].escola + `</div>
    <div class="nomes" id="nome01">`+ lista[i].nome01 + `</div>
    <div class="nomes" id="tel01">
        <a href="https://wa.me/5595`+ lista[i].tel01 + `?text=Olá ` + lista[i].nome01 + `"><div>95 ` + lista[i].tel01 + `</div><img src="whats.png" alt="whatsapp"></a>
    </div>`;

    if (lista[i].nome02 !== "") {
        aux += `<div class="nomes" id="nome01">` + lista[i].nome02 + `</div>
        <div class="nomes" id="tel02">
            <a href="https://wa.me/5595`+ lista[i].tel02 + `?text=Olá ` + lista[i].nome02 + `"><div>95 ` + lista[i].tel02 + `</div><img src="whats.png" alt="whatsapp"></a>
        </div>`;
    };

    document.getElementById('itemLista').innerHTML += aux + '</div>';

}