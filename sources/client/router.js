import express from 'express';
import path from 'path';
import http from 'http';

// On instancie express
const app = express();

// On crée le server http 
const http2 = http.createServer(app);
const port = 8000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use('/', express.static(__dirname + '/home' ));

app.use('/chat', express.static(__dirname + '/chat' ));

app.use('/login', express.static(__dirname + '/login' ));

app.use('/chatbot', express.static(__dirname + '/chatbot' ));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname +'/index.html');
// });

app.get('/admin', (req, res) => {
    res.sendFile(__dirname +'/admin/admin.html');
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
}   );

