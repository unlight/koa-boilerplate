import 'reflect-metadata';
import * as Koa from 'koa';
import { routes as pingRoutes } from './ping/index';

const server = new Koa()
	.use(pingRoutes)
	.listen(3000, () => {
		console.log('Server started - http://localhost:3000');
	});