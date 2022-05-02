// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const express = require('express');
// const app = express();



// const server = http.createServer(app);

// app.get('/', (req, res) => {
//     res.send('HOME');
// });

// app.get('/signup/:promocode', (req,res) => {
//     const {promocode} = req.params;
//     res.send(`<h1>${promocode}</h1>`);

// });

// app.get('/users/:twitterhandle', (req,res) => {
//     const {twitterhandle} = req.params;
//     res.send(`<h1>@${twitterhandle}</h1>`);

// });

// app.get('*', (req,res) => {
//     res.send('THIS IS A CATCH ALL RESPONSE...');
// })



// server.listen(port, hostname, () => {
//     console.log(`server running at port ${hostname};${port}`)
// })


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


