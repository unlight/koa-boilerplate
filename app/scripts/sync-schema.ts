import { createConnection, Connection } from 'typeorm';
import { User } from '../user/user.entity';
import { getConnection } from '../connection';

async function run() {
    const connection = await getConnection({ logQueries: true });
    await connection.syncSchema();
    await connection.close();
}

run()
    .then(() => console.log('Done.'))
    .catch(err => console.error(err))
