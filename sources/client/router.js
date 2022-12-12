import express from 'express';
import path from 'path';
import http from 'http';

// On instancie express
const app = express();

// On crée le server http 
const http2 = http.createServer(app);
const port = 8000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname +'/admin/admin.html');
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
}   );

