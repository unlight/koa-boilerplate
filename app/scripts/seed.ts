import { createConnection, Connection } from 'typeorm';
import { User } from '../user/user.entity';
import { getConnection } from '../connection';
import * as _ from 'lodash';
import { Book } from '../book/book.entity';

const users = [
    new User({ name: 'Swearngen', email: 'tanagroid@shelfroom.net' }),
    new User({ name: 'Lauschus', email: 'irrelated@thong.org' }),
    new User({ name: 'Longhenry', email: 'terpadiene@homecrofter.com' }),
    new User({ name: 'Hermanowicz', email: 'trephone@phalangiidae.edu' }),
    new User({ name: 'Fenny', email: 'homeseeker@serpent.co.uk' }),
    new User({ name: 'Nygard', email: 'unpave@disembarkment.org' }),
    new User({ name: 'Rectenwald', email: 'tilletiaceous@heteromi.com' }),
    new User({ name: 'Kosorog', email: 'suto@subintestinal.com' }),
    new User({ name: 'Wollenberg', email: 'nondiscontinuance@paniculitis.org' }),
];

const books = [
    new Book({ title: 'Hydroceramic' }),
    new Book({ title: 'Handcloth' }),
    new Book({ title: 'Microcephalia' }),
    new Book({ title: 'Minionly' }),
    new Book({ title: 'Infusile' }),
];

async function run() {
    const connection = await getConnection({ logQueries: true });
    await connection.syncSchema(true);
    await Promise.all(users.map(u => connection.entityManager.persist(u)));
    await Promise.all(books.map(b => connection.entityManager.persist(b)));
    let [user1, user2] = users;
    user1.books = [books[0], books[1]];
    user2.books = [books[1], books[2], books[3]];
    await connection.entityManager.persist(user1);
    await connection.entityManager.persist(user2);
    await connection.close();
}

run()
    .then(() => console.log('Done.'))
    .catch(err => console.error(err));
