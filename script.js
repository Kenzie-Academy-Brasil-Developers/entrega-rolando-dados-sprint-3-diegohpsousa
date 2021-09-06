const result = document.getElementById('resultado');
const grafico = document.getElementById('grafico');

const barra = document.createElement('div');
const botao = document.getElementById('botao')

function rolaDados(){
    let min = 1;
    let max = 6;
    let dado1 = 0;
    let dado2 = 0;
    let resultados = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    for(i=0;i<1000;i++){
        
        dado1 = Math.floor((Math.random()*(max - min +1)+min));
        dado2 = Math.floor((Math.random()*(max - min +1)+min));
        let soma = dado1+dado2;
        resultados[soma] = resultados[soma] + 1;
    }

    return resultados;
}

botao.addEventListener('click', function(){
    result.innerText = "";
    grafico.innerText = "";
    let resultados = rolaDados();
    
    for(i=2;i<resultados.length; i++){

        const div = document.createElement('div');
        div.classList.add('div');
        div.innerText = i +" = "+ resultados[i];

        result.appendChild(div);
    }

    for(i=2;i<resultados.length; i++){
        const div = document.createElement('div');
        div.classList.add('divGrafico');
        div.style.height = resultados[i]+'px';
        div.innerText = resultados[i];
        grafico.appendChild(div);

    }
        



    
})