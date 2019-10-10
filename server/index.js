const Koa = require('koa');
const app = new Koa();

const serve = require('koa-static');

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.use(serve(__dirname + '/static'));

app.listen(2002);