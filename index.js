let main = document.querySelector('main');
main.remove();
let newHeader = document.createElement('h1');
let body = document.querySelector('body')
newHeader.id = 'victory';
newHeader.textContent = 'Michoel is the champion'
body.append(newHeader);