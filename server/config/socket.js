const http = require('http');
const { Server } = require('socket.io');
let socket = {};

exports.socket = socket;
exports.installSocket = app => {
  const httpServer = http.createServer(app);
  socket.io = new Server(httpServer, {
    cors: { origin: '*' }
  });
  socket.io.on('connection', () => {
    console.log('connection!');
  })

  socket.io.listen(3002);
}