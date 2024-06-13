lista = [{
    escola: "Escola Municipal Palmira de Castro Machado",
    nome01: "Antonia Araújo",
    tel01: "991154856",
    nome02: "Jhonatan Mendes",
    tel02: "991458485"
},
{
    escola: "Escola Municipal Ivanyr Parente",
    nome01: "João Almeida",
    tel01: "991154856",
    nome02: "Maria Sousa",
    tel02: "991458485"
}];


for (let i in lista) {
    console.log(lista[i].escola);
    let itemTag = document.createElement('div');
    
    document.getElementById('itemLista').innerHTML = `<div class="escola">`+lista[i].escola+`</div>
    <div class="nomes" id="nome01">`+lista[i].nome01+`</div>
    <div class="nomes" id="tel01">
        <div>95 `+lista[i].tel01+`</div>
        <a href="https://wa.me/5595`+lista[i].tel01+`?text=Olá `+lista[i].nome01+`"><img src="whats.png" alt="whatsapp"></a>
    </div>
    <div class="nomes" id="nome02">`+lista[i].nome02+`</div>`
    if(lista[i].nome02 = ""){
        `<div class="nomes" id="nome01">`+lista[i].nome02+`</div>
        <div class="nomes" id="tel02">
            <div>95 `+lista[i].tel02+`</div>
            <a href="https://wa.me/5595`+lista[i].tel02+`?text=Olá `+lista[i].nome02+`"><img src="whats.png" alt="whatsapp"></a>`
    };
}