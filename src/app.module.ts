import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadmapController } from './roadmap/roadmap.controller';
import { RoadmapService } from './roadmap/roadmap.service';
import { RoadmapModule } from './roadmap/roadmap.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), RoadmapModule],
  controllers: [AppController, RoadmapController],
  providers: [AppService, RoadmapService],
})
export class AppModule {}
