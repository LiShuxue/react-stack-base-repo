const Router = require('koa-router');
const router = new Router();

const testData1 = require('./test1.json');

router.get('/module1/get', ctx => {
  ctx.status = 200;
  ctx.body = testData1;
});

module.exports = router;
