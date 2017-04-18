import { createConnection, Connection } from 'typeorm';
import * as Router from 'koa-router';
import * as Koa from 'koa';
import { User } from './user/user.entity';
import { Book } from './book/book.entity';

export function getConnection(options?): Promise<Connection> {
    return createConnection({
        driver: {
            type: process.env.APP_DRIVER_TYPE,
            storage: process.env.APP_DRIVER_STORAGE
        },
        entities: [
            User, Book
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
        k['entityManager'] = connection.entityManager;
        await next();
        connection.close();
    };
}
