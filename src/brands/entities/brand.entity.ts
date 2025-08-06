import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'brand' })
@ObjectType()
export class Brand {
  @ObjectIdColumn()
  @Field(() => Int)
  id: ObjectId;

  @Column({ type: 'text' })
  @Field()
  name: string;

  @Column({ type: 'text', nullable: true })
  @Field()
  content: string;

  @Column({ type: 'date' })
  @Field(() => Date)
  createdAt: Date;

  @Column({ type: 'date', nullable: true })
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
