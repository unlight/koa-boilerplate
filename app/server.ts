import 'reflect-metadata';
import * as Koa from 'koa';
import { routes as pingRoutes } from './ping/index';
import { routes as userRoutes } from './user/index';
import { connection } from './connection';
import { errorHandler } from './error-handler';
const bodyParser = require('koa-bodyparser');

const app = new Koa();
if (process.env.NODE_ENV !== 'production') {
    const koaResponseTime = require('koa-response-time');
    app.use(koaResponseTime());
}
app.use(errorHandler());
app.use(bodyParser());
app.use(connection());
app.use(pingRoutes);
app.use(userRoutes);

if (module.parent === null) {
    const server = app.listen(3000, () => {
        console.log('Server started - http://localhost:3000');
    });
}
