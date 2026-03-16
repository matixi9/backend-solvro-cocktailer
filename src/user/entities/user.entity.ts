import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/browser";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({default: 'user'})
    role: string;
}
