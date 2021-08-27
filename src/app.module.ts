import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadmapController } from './roadmap/roadmap.controller';
import { RoadmapService } from './roadmap/roadmap.service';
import { RoadmapModule } from './roadmap/roadmap.module';
import { ConfigModule } from '@nestjs/config';

import {MONGO_URI} from '../config.js';

@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forRoot(process.env.MONGO_URI), RoadmapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
