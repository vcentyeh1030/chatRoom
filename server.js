const express = require('express');
const path = require('path');
const { Server } = require('ws');
const { createServer } = require('http');

const app = express();
const server = createServer(app);
const ws = new Server({ server });

app.use(express.static(__dirname + '/dist/chatRoom'));
console.log("Server start");
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname+'/dist/chatRoom/index.html'));
});

server.listen(process.env.PORT || 8080);

ws.on('connection', socket => {
  console.log('connect ws');
  socket.on('message', data => {
    console.log(data);
    const { type, from, message } = JSON.parse(data);
    if(type === 'message') {
      const event = JSON.stringify({
        type: '[Chat] Add message',
        from,
        message
      });
      ws.clients.forEach(client => {
        client.send(event);
      });
    };
  });
});

// app.listen(process.env.PORT || 8080);
