import { Controller,Get ,Post,Body } from '@nestjs/common';
import { RoadmapService } from './roadmap.service'
import { RoadmapDto } from './roadmap.dto';

@Controller('roadmap')
export class RoadmapController {
    constructor(private readonly roadmapService: RoadmapService) {}
    @Get()
    findAll(): Promise<RoadmapDto[]> {
        return this.roadmapService.findAll();
    }

    @Post()
    async create(@Body() roadmapDto: RoadmapDto){
        return this.roadmapService.createRoadmap(roadmapDto)
    }
}


