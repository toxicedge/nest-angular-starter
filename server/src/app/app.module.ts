import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApiController } from './api/api.controller';
import { AppService } from './services/app.service';
import { ClientSocket } from './socket/client.socket';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'dist/client'),
    }),
  ],
  controllers: [ApiController],
  providers: [AppService, ClientSocket],
})
export class AppModule {}
