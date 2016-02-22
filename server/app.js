var koa = require('koa');
var app = koa();

var Router = require('koa-router');
var myRouter = new Router();

myRouter.get('/', function *(next) {
  this.response.body = 'Hello World!';
});

myRouter.get('/404', function *(next) {
  console.log(this.request);
  this.response.body = 'not found!';
});

// 访问 /programming/how-to-node
myRouter.get('/:category/:title', function *(next) {
  console.log(this.params);
  this.response.body = '/:category/:title';
  // => { category: 'programming', title: 'how-to-node' }
});

myRouter.post('/login', function *(next){
	console.log('login');
	this.response.body = '{"error":null,"login":true}';
})


app.use(function *(next){
	yield next;
});

app.use(myRouter.routes());

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

app.listen(3000);

