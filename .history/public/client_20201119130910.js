const socket = io();
let name;
let textarea = document.querySelector('#textarea');
do {
    name = prompt('Please enter your name:')
} while (!name);

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value);
    }
});

function sendMessage(msg) {
    prompt(msg);
}