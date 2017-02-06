import * as Router from 'koa-router';
import { EntityManager } from 'typeorm';
import { User } from '../orm/entities/user';

export async function createUser(k: Router.IRouterContext, next: any) {
	let entityManager: EntityManager = k['entityManager'];
	let user = new User();
	user.name = 'Frances';
	k.body = await entityManager.persist(user);
}

export const routes = new Router()
	.prefix('/user')
	.post('/', createUser)
	.routes();