import 'reflect-metadata';
import * as Koa from 'koa';
import { routes as pingRoutes } from './ping/index';
import { routes as userRoutes } from './user/index';
import { connection } from './connection';
import { handleError } from './handle-error';
const bodyParser = require('koa-bodyparser');


const server = new Koa()
	.use(handleError())
	.use(bodyParser())
	.use(connection())
	.use(pingRoutes)
	.use(userRoutes)
	.listen(3000, () => {
		console.log('Server started - http://localhost:3000');
	});
