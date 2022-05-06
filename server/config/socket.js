const http = require('http');
const { Server } = require('socket.io');
let { players, views } = require('./index')
let socket = {};

exports.socket = socket;
exports.installSocket = app => {
  const httpServer = http.createServer(app);
  socket.io = new Server(httpServer, {
    cors: { origin: '*' }
  });
  socket.io.on('connection', skt => {
    console.log('connection.')
    skt.on('playerJoin', (user, callback) => {
      if (players.length >= 2) {
        callback({
          code: -1,
          msg: '人数已满'
        })
      } else {
        players.push(user);
        views = views.filter(view => view !== user);
        callback({
          code: 200,
          data: {
            players,
            views
          },
          msg: '加入成功'
        });
      }
    })
    skt.on('playerLeave', (user, callback) => {
      views.push(user);
      players = players.filter(p => p !== user);
      callback({
        code: 200,
        data: {
          players,
          views
        }
      })
    })
  })

  socket.io.listen(3002);
}