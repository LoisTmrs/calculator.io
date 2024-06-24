function calcular() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneBovina = (homens * 500 + mulheres * 300 + criancas * 200) / 1000 ;
    const frango = (homens * 200 + mulheres * 200 + criancas * 100) / 1000;
    const linguiça = (homens * 200 + mulheres * 200 + criancas * 200) / 1000;
    const refrigerante = (homens * 300 + mulheres * 400 + criancas * 200) / 1000;
    const cerveja = (homens * 800 + mulheres * 500) / 1000;

    const resultados = `
    <h2>Resultados:</h2>
    <p>Carne Bovina: ${carneBovina} Kg</p>
    <p>Frango: ${frango} Kg</p>
    <p>Linguiça: ${linguiça} Kg</p>
    <p>Refrigerante: ${refrigerante} L</p>
    <p>Cerveja: ${cerveja} L</p>
    `;

    document.getElementById('resultados').innerHTML = resultados;
        }