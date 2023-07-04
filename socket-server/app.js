const server = require('http').createServer()


const io = require('socket.io')(server, {
    cors: {
        origin: true,
        methods: "*"
    }
})
io.on('connection', client => {
    client.on('chat', data => {
        client.broadcast.emit('chat', data);
    });
    client.on('disconnect', () => { /* … */ });
    // setInterval(() => {
    //     // io.emit('chat', 'Hello from server')
    // },1000)
});
server.listen(5001);