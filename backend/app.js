import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';

const port = 8090
const app = express()
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
