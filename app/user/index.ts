import * as Router from 'koa-router';
import { EntityManager } from 'typeorm';
import { User } from './user.entity';
import { schema } from './user.schema';
import pick = require('lodash/pick');
import Joi = require('joi');

export async function createUser(k: Router.IRouterContext, next: any) {
    let { error, value } = Joi.validate(k.request['body'], schema);
    if (error) {
        k.status = 400;
        k.body = error;
        return;
    }
    let entityManager: EntityManager = k['entityManager'];
    let user = new User();
    Object.assign(user, value);
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
