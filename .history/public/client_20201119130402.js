const socket = io();
let name;
do {
    name = prompt('Please enter your name:');
} while (!name);