import { Column, Entity, Relation } from 'typeorm';
import { UserEntity} from './auth.entity'

@Entity()
export class AccessLog {
  @Column({ type: 'varchar', length: 512, nullable: true })
  ua: string;

  @Column()
  endpoint: string;

  @Column()
  ip: string;

  loginUser?: Relation<UserEntity>
}
