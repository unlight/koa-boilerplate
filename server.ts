import 'reflect-metadata';
import * as Koa from 'koa';
import { routes as pingRoutes } from './ping/index';
import { connection } from './orm/connection';
import { routes as userRoutes } from './user/index';
const handleError = require('koa-handle-error');


const server = new Koa()
	.use(handleError(err => console.error(err)))
	.use(connection())
	.use(pingRoutes)
	.use(userRoutes)
	.listen(3000, () => {
		console.log('Server started - http://localhost:3000');
	});