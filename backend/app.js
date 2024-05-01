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

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

io.on('connection', (socket) => {
    const query = deserialise(socket.handshake.query);
    console.log(query.roomId)
    socket.join('some room');

    // // broadcast to all connected clients in the room
    // io.to('some room').emit('hello', 'world');
    //
    // // broadcast to all connected clients except those in the room
    // io.except('some room').emit('hello', 'world');
    //
    // // leave the room
    // socket.leave('some room');
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function deserialise(input) {
    return JSON.parse(JSON.stringify(input));
}
