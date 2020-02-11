import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApiController } from './api.controller';
import { AppService } from './app.service';
import { join } from 'path';

const staticDir = join(process.cwd(), 'dist/client');
console.log(`Static dir: ${staticDir}`);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: staticDir,
    }),
  ],
  controllers: [ApiController],
  providers: [AppService],
})
export class AppModule {}
