const socket = io();
let name;
let textarea = document.getElementById('textarea');
let messageArea = document.getElementsByClassName('message_area ');
do {
    name = prompt('Please enter your name:')
} while (!name);

textarea.addEventListener("keyup", (e) => {

    if (e.keyCode == 13) {
        sendMessage(e.target.value);
    }

})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    appendMessage(msg, 'outgoing');
    socket.emit('message', msg);

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div');
    let className = type
    mainDiv.classList.add(className, 'message')
    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>

    `
    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}

socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
});