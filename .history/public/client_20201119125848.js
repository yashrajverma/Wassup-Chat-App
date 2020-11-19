const socket = io();
let name;
do {
    prompt('Please enter your name:');
} while (!name);