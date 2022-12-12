import { io } from "socket.io-client"

const socket = io("ws://localhost:3000")

socket.on("connect", () => {
    console.log("Connected to the socket")
})

//  on ouvre une connexion socket

window.onload = () => {
    document.querySelector("form").addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e)

            const name = document.querySelector('#name');
            const message = document.querySelector('#message');

            socket.emit('chat_message', {name: name.value, message: message.value})
            document.querySelector('#message').value = '';

        }) 

        socket.on('chat_message', (msg) => {
            document.querySelector('#messages').innerHTML += `<p>${ msg.name }: ${msg.message}</p>`
        });
}