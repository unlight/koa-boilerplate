import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, BeforeInsert } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity()
export class User {

    constructor(fields?: any) {
        if (fields && fields.name) this.name = fields.name;
        if (fields && fields.email) this.email = fields.email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name: string;

    @Column({ length: 250, unique: true, nullable: true })
    email: string;

    @ManyToMany(type => Book, b => b.authors)
    books: Book[] = [];

    @BeforeInsert()
    doSomethingBeforeInsertion() {
        // Can replace id here, return promise or void
    }
}
