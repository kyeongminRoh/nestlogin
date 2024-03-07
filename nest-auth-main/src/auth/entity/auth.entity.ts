import { BaseEntity, Column, Entity } from "typeorm";


@Entity()
export class UserEntity extends BaseEntity {
    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    password: string;
}