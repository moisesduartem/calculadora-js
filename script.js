document.addEventListener('DOMContentLoaded', function () {
    const keys = getKeys();
    keys.forEach((key, i) => {
        key.addEventListener('click', e => {
            console.log(key.getAttribute('class'));
        });
    });
});

/**
 * [Retorna as teclas da calculadora.]
 */
let getKeys = function () {
    return document.querySelectorAll('.key');
} 