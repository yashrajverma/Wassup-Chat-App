const socket = io();
let name;
let textarea = document.querySelector('#textarea');
do {
    name = prompt('Please enter your name:');
} while (!name);