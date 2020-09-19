document.addEventListener('DOMContentLoaded', function(){
    // Recebe as teclas
    const keys = getKeys();
    // Inicializa primeiro valor do calculo, segundo valor do calculo e acumulador
    let a = 0, b = 0, acc = '';
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
                a = 0;
                b = 0;
                acc = '';
                return clear(visor);
            }
            // Se for uma operação, entrega o nome 
            // da função dessa operação à variavel operation
            if (isAnOperation(key) && key.value !== 'calc') {
                // Adiciona a função ao objeto operation
                operation = {
                    fn: window[key.value],
                    symbol: key.innerText
                };
                // Atribui o que estava no contador até agora à 'a'
                a = acc ? parseInt(acc) : 0;
                // Põe cor do botão da operação matemática mais escura até que 
                // '=' seja selecionado
                key.className = 'key operation enabled';
                // Limpa o acumulador
                acc = '';
                // Retorna o objeto
                return operation;
            }
            // Se foi clicado no sinal de igual
            // ele efetua a operação entre a e b
            if (key.value === 'calc') {
                // Atribui o novo acumulador à variável b
                b = parseInt(acc);
                // Inclui o resultado no visor
                visor.value = calc(a, b, operation.fn);
                // Acumulador recebe o resultado
                acc = calc(a, b, operation.fn);
                // Zera as variáveis
                a = 0, b = 0;
                // Volta botão da cor normal para a operação novamente
                document.querySelector('.enabled').className = 'key operation';
                return true;
            }
            // Adiciona a tecla ao acumulador
            acc += key.value;
            // Insere o acumulador no visor
            visor.value = acc;
        });
    });
});

/**
 * [Executa calculo.]
 */

function calc(a, b, fn) {
    return fn(a, b);
};

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
function clear(visor) {
    return visor.value = '0';
};