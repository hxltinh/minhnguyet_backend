import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'post' })
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'text' })
  @Field()
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field()
  content: string;

  @Column({ type: 'text', nullable: true })
  @Field()
  type: PostType;

  @Column({ type: 'date' })
  @Field(() => Date)
  createdAt: Date;

  @Column({ type: 'date', nullable: true })
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

type PostType = 'article' | 'blog' | 'news';
