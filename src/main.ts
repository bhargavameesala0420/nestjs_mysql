import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseController } from './database/database.controller';

async function bootstrap() {
  const AppDataSource = DatabaseController.getTypeOrmConfig();
  AppDataSource
    .authenticate()
    .then(()=> {
        console.log("Database is connected");
    })
    .catch((err) => {
        console.log(err);
    })
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
