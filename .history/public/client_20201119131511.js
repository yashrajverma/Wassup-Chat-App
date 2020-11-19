const socket = io();
let name;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message_area');
do {
    name = prompt('Please enter your name:')
} while (!name);

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value);
    }
});

function sendMessage(msg) {
    let msg = {
        user: name,
        message: msg
    }
    appendMessage(msg, 'outgoing')
}

function appendMessage(msg, type) {

}