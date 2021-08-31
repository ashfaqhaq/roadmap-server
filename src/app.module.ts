import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadmapModule } from './roadmap/roadmap.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthorizationModule } from './authorization/authorization.module';



@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forRoot(process.env.MONGO_URI), RoadmapModule,AuthorizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
