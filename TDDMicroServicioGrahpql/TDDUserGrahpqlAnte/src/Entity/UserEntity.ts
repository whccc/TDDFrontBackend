import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm';

import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
class tblUser extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column('varchar', { length: 150 })
  strFullName!: string;

  @Field()
  @Column('varchar', { length: 150 })
  strUser!: string;

  @Field()
  @Column('varchar', { length: 150 })
  strPassword!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: string;
}

export default tblUser;
