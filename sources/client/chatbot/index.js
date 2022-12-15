import { chatbot } from "./bot.js";
const socket = io("ws://localhost:3000")

socket.on("connect", () => {
    console.log("Connected to the socket")
})

socket.emit('chatbot_response', "Bonjour, je suis un chatbot, que puis-je faire pour vous ?");

//  on ouvre une connexion socket
window.onload = () => {

    socket.on("chatbot_response", (msg) => {
        document.querySelector('#messages-bot').innerHTML += `<p> Chatbot : ${ msg }</p>`
    })   

    document.querySelector("form").addEventListener('submit', (e) => {
        e.preventDefault();        

        const message = document.querySelector('#message');

        socket.emit('chatbot_request', {name: "You", message: message.value})
        document.querySelector('#message').value = '';

    }) 

    socket.on('chatbot_request', (msg) => {

        document.querySelector('#messages-bot').innerHTML += `<p>${ msg.name }: ${msg.message}</p>`
        let response = chatbot().init(msg.message);

        socket.emit('chatbot_response', response);
    });

}

