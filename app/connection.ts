import { createConnection, Connection } from 'typeorm';
import * as Router from 'koa-router';
import * as Koa from 'koa';
import { User } from './user/user.entity';
import { Book } from './book/book.entity';
import { UserSubscriber } from './user/user.events';

export function getConnection(options?): Promise<Connection> {
    return createConnection({
        driver: {
            type: process.env.TYPEORM_DRIVER_TYPE,
            storage: process.env.TYPEORM_STORAGE
        },
        entities: [
            User, Book
        ],
        subscribers: [
        ],
        autoSchemaSync: false,
        logging: {
            logQueries: options && options.logQueries
        }
    });
}

export function connection(): Koa.Middleware {
    return async function(k: Koa.Context, next) {
        let connection = await getConnection();
        await next();
        connection.close();
    };
}
