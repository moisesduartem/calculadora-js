document.addEventListener('DOMContentLoaded', function(){
    const keys = getKeys();
    let accumulator = '';
    let operation = '';
    keys.forEach(function(key, i) {
        key.addEventListener('click', function(e){
            let isAnOperation = key.getAttribute('class').match(/operation/g); 
            operation = (isAnOperation) ? key.value : '';
            
            if (operation == '=') {
                executeCalc(accumulator);
                return accumulator = '';
            }
            
            accumulator += (accumulator.length > 0 && isAnOperation || !isAnOperation) ? key.value : '';

            console.log(accumulator);
        
        });
    });
});

/**
 * [Retorna as teclas da calculadora.]
 */
let getKeys = function () {
    return document.querySelectorAll('.key');
} 

let executeCalc = function (expression) {
    console.log(eval(expression));
}