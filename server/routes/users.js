var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/create', async (req, res, next) => {
  const body = req.body;
  console.log(body)
  res.json({
    code: 200,
    data: {}
  })
});

module.exports = router;
