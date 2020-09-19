document.addEventListener('DOMContentLoaded', function(){
    // Recebe as teclas
    const keys = getKeys();
    // Inicializa primeiro valor do calculo, segundo valor do calculo e acumulador
    let a = '', b = '', acc = '';
    // Inicializa a operação
    let operation = {};
    // Captura o visor
    const visor = document.getElementById('result');
    // Percorre as teclas
    keys.forEach(function(key, i) {
        // Detecta o clique...
        key.addEventListener('click', function(e){
            // Se for o botão CLEAR, já limpa a tela, o acumulador e as variáveis 
                if (key.value === 'clear') {
                    return clear(a, b, acc, visor);
                }

                // Se for uma operação, entrega o nome 
                // da função dessa operação à variavel operation
                if (isAnOperation(key) && key.value !== 'calc') {
                    // Atribui o que estava no contador até agora à 'a'
                    a = parseInt(acc);
                    visor.value += ` ${key.innerText} `;
                    acc = '';
                    operation.fn = window[key.value];
                    operation.symbol = key.innerHTML;
                    return operation;
                }
                
                // Se foi clicado no sinal de igual
                // ele efetua a operação entre a e b
                if (key.value === 'calc') {
                    b = parseInt(acc);
                    visor.value = calc(a, b, operation.fn);
                    acc = calc(a, b, operation.fn);
                    a = '', b = '';
                    return true;
                }

                acc += key.value;
                visor.value = acc;
            ;
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
    return a / b;
};

/**
 * [Limpar o visor.]
 */
function clear(a, b, acc, visor) {
    a = ''; b = ''; acc = '';
    return visor.value = '0';
};

/**
 * [Executa calculo.]
 */

 function calc(a, b, fn) {
    return fn(a, b);
 }