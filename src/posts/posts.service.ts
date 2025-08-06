import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  async create(createPostInput: CreatePostInput) {
    const item = this.postsRepository.create(createPostInput);
    item.createdAt = new Date();

    return await this.postsRepository.save(item);
  }

  async findAll() {
    const posts =
      await this.postsRepository.query<Post[]>('SELECT * FROM post');

    return posts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
