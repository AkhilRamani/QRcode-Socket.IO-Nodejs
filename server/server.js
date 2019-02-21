const express = require('express');
const app= express();
const http= require('http').Server(app);
const io= require('socket.io')(http);
const path= require('path');

const publicPath= path.join(__dirname, '../public');
port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('user connected');

    socket.on('getQrcode', (callback)=>{
        callback(socket.id);
    });

    socket.on('qrConnection', (socketIdPC, callback)=>{
        console.log(socketIdPC);
        callback();  
    })

    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    });
});

http.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
});