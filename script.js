document.addEventListener('DOMContentLoaded', function(){
    const keys = getKeys();
    let accumulator = '';
    let operation = false;
    keys.forEach(function(key, i) {
        key.addEventListener('click', function(e){ 
            operation = (isAnOperation(key)) ? key.value : '';
            console.log(operation);

            if (operation == '=') {
                // return accumulator = executeCalc(accumulator);
            }
        
        });
    });
});

/**
 * [Retorna as teclas da calculadora.]
 */
let getKeys = function () {
    return document.querySelectorAll('.key');
};

/**
 * [Busca e retorna resultados para encontrar class operation no elemento.]
 * @param {r} key 
 */
let isAnOperation = function (key) {
    return key.getAttribute('class').match(/operation/g);
};

let executeCalc = function (expression) {
    return toString((eval(expression)));
};