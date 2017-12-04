

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function (ctx, next) {
    ctx.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function(ctx,next) {
    ctx.body = homeListData
});
app
.use(router.routes())
.use(router.allowedMethods());

app.listen(5000);