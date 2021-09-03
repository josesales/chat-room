const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const { generateMessage } = require('./services/message');
const { addUser, removeUserFromRoom, getUsersInRoom } = require('./services/user');

const app = express();

// if (process.env.NODE_ENV == 'production') {
    // app.use(express.static(path.join(__dirname, 'client/build')))
    // app.get('/*', function (req, res) {
    //     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    //   });
// }

const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server)


//build in event that runs when a client gets a new connection
io.on('connection', (socket) => {

    const room = socket.handshake.query.room.trim().toLowerCase();

    socket.join(room);

    socket.on('addUser', (userProps, callback) => {
        const { user, error } = addUser({ id: socket.id, ...userProps });

        if (error) {
            return callback(error);
        }

        //socket.broadcast.emit: emit the event to all the clients who are connected except for this particular socket
        socket.broadcast.to(user.room).emit('addMessage',
            generateMessage(`${user.name} has joined!`, { name: null, room: user.room, createdAt: new Date() }));

        //emit users in the room event
        io.to(user.room).emit('setRoom', {
            name: user.room,
            users: getUsersInRoom(user.room)
        });

        callback();
    });

    socket.on('addMessage', (messageFields, callback) => {

        //emit the event to all the sockets/clients who are connected
        io.to(messageFields.user.room).emit('addMessage', messageFields);

        callback();
    });

    socket.on('removeUserFromRoom', (user, callback) => {

        removeUserFromRoom(user);

        //emit the setRoom with the remaining users in the room
        io.to(user.room).emit('setRoom', {
            name: user.room,
            users: getUsersInRoom(user.room)
        });

        const userNameCap = user.name.charAt(0).toUpperCase() + user.name.slice(1);

        socket.broadcast.to(user.room).emit('addMessage',
            generateMessage(`${userNameCap} has left!`, { name: null, room: user.room }));


        callback();
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});