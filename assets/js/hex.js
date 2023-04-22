const head = document.querySelector('.head');
const titulo_corpo = document.querySelector('.titulo-corpo');
const btn_submit = document.querySelector('.btn-submit');

// Função de randomização

function randColorHex(){
    let randomNumber = Math.floor(Math.random() * 16777216);
    return "#" + randomNumber.toString(16);
}

btn_submit.onclick = function(){
    let cor = randColorHex();
    document.body.style.backgroundColor = cor;
    titulo_corpo.innerText = `Background Color: ${cor}`;
}
