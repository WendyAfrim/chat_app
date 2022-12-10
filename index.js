// On instancie express
const app = require('express')();

// On crée le server http 
const http = require('http').createServer(app);

// On instancie socket.io 
const io = require('socket.io')(http);

// On crée la route 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

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

// On va demander au server http de répondre sur le port 3000
http.listen(3000, () => {
    console.log('J\'ecoute le port 3000');
})