var socket = io();
socket.on('connect', ()=>{
    console.log('connected');

    socket.emit('getQrcode', function(socketId){

        let qrcode = new QRCode("output", {
            text: socketId,
            width: 177,
            height: 177,
            colorDark : "#990000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        console.log('socketId',socketId);
    });
  
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});
