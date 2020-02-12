import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApiController } from './api/api.controller';
import { AppService } from './services/app.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'dist/client'),
    }),
  ],
  controllers: [ApiController],
  providers: [AppService],
})
export class AppModule {}
