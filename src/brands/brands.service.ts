import { Injectable } from '@nestjs/common';
import { CreateBrandInput } from './dto/create-brand.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
import { UpdateBrandInput } from './dto/update-brand.input';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}
  async create(createBrandInput: CreateBrandInput) {
    const item = this.brandRepository.create(createBrandInput);
    item.createdAt = new Date();

    return await this.brandRepository.save(item);
  }

  async findAll() {
    const brands = await this.brandRepository.find();

    return brands;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandInput: UpdateBrandInput) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
