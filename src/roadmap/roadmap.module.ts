import { Module } from '@nestjs/common';
import { RoadmapController } from './roadmap.controller';
import { RoadmapService } from './roadmap.service';
import { MongooseModule } from '@nestjs/mongoose'
import { RoadmapSchema } from './schema/roadmap.schema';


@Module({
    exports: [RoadmapService],
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Roadmap',
                schema: RoadmapSchema
            },
    ]),
],
    controllers: [RoadmapController,],
    providers: [RoadmapService],
})
export class RoadmapModule { }
