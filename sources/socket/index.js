import { Server } from "socket.io"

// On instancie socket.io 
const io = new Server(9000, {
    cors: {
        origin: "http://localhost:8000",
    }
});

// On écoute l'évenement "connection" de socket.io
io.on('connection', (socket) => {
    console.log('Une connexion est active')

    // On ecoute les deconnexions
    socket.on('disconnect', () => {
        console.log('Deconnexion');
    })

    socket.on("chat_message", (msg) => {
        //  On relaie le message vers tous les utilisateurs connectés
       io.emit('chat_message', msg);
    })
});