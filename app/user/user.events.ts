import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent, RemoveEvent } from 'typeorm';
import { User } from './user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

    listenTo() {
        return User;
    }

    beforeInsert(event: InsertEvent<User>) {
        console.log(`BEFORE User INSERTED: `, event.entity);
    }

    beforeUpdate(event: UpdateEvent<User>) {
        console.log(`BEFORE User UPDATED: `, event.entity);
    }

    beforeRemove(event: RemoveEvent<User>) {
        console.log(`BEFORE User WITH ID ${event.entityId} REMOVED: `, event.entity);
    }

    afterInsert(event: InsertEvent<User>) {
        console.log(`AFTER User INSERTED: `, event.entity);
    }

    afterUpdate(event: UpdateEvent<User>) {
        console.log(`AFTER User UPDATED: `, event.entity);
    }

    afterRemove(event: RemoveEvent<User>) {
        console.log(`AFTER User WITH ID ${event.entityId} REMOVED: `, event.entity);
    }

    afterLoad(entity: User) {
        console.log(`AFTER User LOADED: `, entity);
    }

}
