import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Book {

    // constructor(fields: Partial<Book>); // BUG: https://github.com/eslint/typescript-eslint-parser/issues/222

    constructor(data: any = null) {
        if (data && data.constructor === Object) {
            Object.assign(this, data);
        }
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250, type: 'string' })
    title: string;

    @ManyToMany(type => User, u => u.books)
    @JoinTable()
    authors: User[] = [];

    @Column({ nullable: true, comment: 'Place of publication' , type: 'string'})
    city: string;

    @Column({ nullable: true })
    publisher: string;

    @Column({ type: 'int', nullable: true })
    year: number;

    @Column({ nullable: true, type: 'int', comment: 'Number of pages' })
    pages: number;

    @Column({ nullable: true })
    note: string;

    @Column({ nullable: true })
    isbn: string;
}
