import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';
import { PrismaModule } from './prisma/prisma.module';
import { ItemsService } from './items/items.service';

@Module({
  imports: [BotModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
