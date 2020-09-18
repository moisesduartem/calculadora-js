document.addEventListener('DOMContentLoaded', function(){
    // Recebe as teclas
    const keys = getKeys();
    // Inicializa o acumulador
    let accumulator = '';
    // Percorre as teclas
    keys.forEach(function(key, i) {
        // Detecta o clique...
        key.addEventListener('click', function(e){
            // Se não for uma operação, adiciona ao acumulador
            accumulator += (isAnOperation(key)) ? '' : key.value;
            
            document.getElementById('result').value = accumulator;
        });
    });
});

/**
 * [Retorna as teclas da calculadora.]
 */
function getKeys() {
    return document.querySelectorAll('.key');
};

/**
 * [Busca e retorna resultados para encontrar class operation no elemento.]
 * @param {r} key 
 */
function isAnOperation (key) {
    return key.getAttribute('class').match(/operation/g);
};

let run = function (fn) {
    return fn();
}

/**
 * [Executa Soma.]
 */
function sum(a, b) {
    return a + b;
};

/**
 * [Executa Subtração.]
 */
function sub(a, b) {
    return a - b;
};

/**
 * [Executa Multiplicação.]
 */
function mult(a, b) {
    return a * b;
};

/**
 * [Executa Divisão.]
 */
function div(a, b) {
    return a * b;
};

/**
 * [Limpar o visor.]
 */
function clear() {
    return document.getElementById('result').value = '0';
};