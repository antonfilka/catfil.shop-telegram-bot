import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUSerFromContext } from 'src/utils/telegram';
import { Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  private bot: Telegraf;

  constructor(private prisma: PrismaService) {
    this.bot = new Telegraf(process.env.BOT_TOKEN); // Ensure you have BOT_TOKEN in your .env
    this.initializeMessageHandling();
  }

  private initializeMessageHandling() {
    this.bot.start((ctx) => {
      console.log(GetUSerFromContext(ctx));
      ctx.reply('Welcome to the Product Catalog Bot');
    });

    this.bot.command('addItem', (ctx) => {
      if (ctx.from.id === Number(process.env.ADMIN_ID)) {
        this.prisma.;
        ctx.reply('Item added successfully');
      } else {
        ctx.reply('You are not authorized to add items.');
      }
    });

    this.bot.launch();
  }
}
