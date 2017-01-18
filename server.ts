import 'reflect-metadata';
import * as Koa from 'koa';
import { router } from './ping/index';

new Koa()
	.use(router.routes())
	.listen(3000, () => {
		console.log('Server started - http://localhost:3000');
	});