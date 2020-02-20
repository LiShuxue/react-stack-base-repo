const Router = require('koa-router');
const router = new Router();

const testData1 = require('./test1.json');

router.post('/module2/post', ctx => {
  ctx.status = 200;
  ctx.body = testData1;
});

module.exports = router;
