var express = require('express');
var router = express.Router();
var { views } = require('../config');
var { socket } = require('../config/socket')

/* GET users listing. */

router.post('/create', async (req, res, next) => {
  const body = req.body;
  const view = views.find(p => p === body.name);
  if (view) {
    res.json({
      code: -1,
      data: null,
      msg: '用户名已存在'
    });
    return;
  }
  views.push(body.name);
  socket.io.emit('createView', views);
  res.json({
    code: 200,
    data: body,
    msg: '创建成功'
  })
});

module.exports = router;
