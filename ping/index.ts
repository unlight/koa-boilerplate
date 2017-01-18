import * as Router from "koa-router";

async function pong(k: Router.IRouterContext, next) {
	k.body = await Promise.resolve({
		date: new Date(),
		result: `Pong`,
		params: k.params,
		query: k.query,
		context: k,
	});
	next();
}

export const router = new Router()
	.prefix('/ping')
	.post('/:pong', pong)
	.get('/:pong', pong)
	.get('/', pong);