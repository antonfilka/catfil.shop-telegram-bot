import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from 'src/types/items';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async createItem(data: CreateItemDto) {
    return this.prisma.item.create({
      data,
    });
  }

  // Add other CRUD operations
}
