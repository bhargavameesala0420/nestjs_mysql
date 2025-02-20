import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UtilityController } from './utility/utility.controller';
import { DatabaseController } from './database/database.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, UtilityController, DatabaseController],
  providers: [AppService],
})
export class AppModule {}
