import * as Router from 'koa-router';
import { EntityManager } from 'typeorm';
import { User } from './user.entity';
import pick = require('lodash/pick');

export async function createUser(k: Router.IRouterContext, next: any) {
	let entityManager: EntityManager = k['entityManager'];
	let user = new User();
	Object.assign(user, pick(k.request['body'], ['name']));
	k.body = await entityManager.persist(user);
}

export async function browseUser(k: Router.IRouterContext, next: any) {
    let entityManager: EntityManager = k['entityManager'];
    let [result, count] = await entityManager.findAndCount(User);
    k.body = { result, count };
}

export const routes = new Router()
	.prefix('/user')
    .post('/', createUser)
	.get('/browse', browseUser)
	.routes();
