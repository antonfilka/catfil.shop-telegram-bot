import { TelegramUser } from 'src/types';

export function GetUSerFromContext(ctx: any): TelegramUser {
  console.log(ctx.from);
  return ctx.update.message.from;
}
