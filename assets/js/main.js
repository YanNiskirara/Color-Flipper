const head = document.querySelector('.head');
const titulo_corpo = document.querySelector('.titulo-corpo');
const btn_submit = document.querySelector('.btn-submit');

// Variáveis globais

let contador = 0;
const cores = ['#f1f5f8','#8080ff','#b30000', '#00264d', '#00cc44', '#e6b800', '#cc0066', '#006666', '#66ff66' ];

// Função de "randomização"

function randColorSimples(){
    if(contador < cores.length -1){
        contador++;
        return cores[contador];;
    }else{
        contador = 0;
        return cores[contador];
    }
}

btn_submit.onclick = function(){
    const cor = randColorSimples();
    document.body.style.backgroundColor = cor;
    titulo_corpo.innerText = `Background Color = ${cor}`
}
