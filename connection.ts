import { createConnection, Connection } from 'typeorm';
import * as Router from 'koa-router';
import * as Koa from 'koa';
import { User } from './user/user.entity';

function getConnection(): Promise<Connection> {
	return createConnection({
		driver: {
			type: 'sqlite',
			storage: 'db.sqlite',
		},
		entities: [
			User
		],
		autoSchemaSync: false,
	}).then(connection => {
		// Here you can start to work with your entities.
		return connection.syncSchema()
			.then(() => connection);
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
