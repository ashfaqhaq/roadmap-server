import { Module } from '@nestjs/common';
import { RoadmapController } from './roadmap.controller';
import { RoadmapService } from './roadmap.service';
import { MongooseModule } from '@nestjs/mongoose'
import { RoadmapSchema } from './schema/roadmap.schema';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthorizationModule } from 'src/authorization/authorization.module';

@Module({
    exports: [RoadmapService],
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Roadmap',
                schema: RoadmapSchema
            },

        ]),
        ConfigModule.forRoot()

    ],
    controllers: [RoadmapController,],
    providers: [RoadmapService],
})
export class RoadmapModule { }
