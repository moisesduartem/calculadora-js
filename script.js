const container = document.getElementById('container');
let button;

const keys = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/' ];

keys.forEach((key) => {
    button = document.createElement('div');
    button.className = 'key'
    button.setAttribute('value', key)
    button.innerHTML = key;
    container.appendChild(button);
})