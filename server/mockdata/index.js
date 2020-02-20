const Router = require('koa-router');
const router = new Router();

const module1 = require('./module1');
const module2 = require('./module2');

router.use(module1.routes(), module1.allowedMethods());
router.use(module2.routes(), module2.allowedMethods());

module.exports = router;
