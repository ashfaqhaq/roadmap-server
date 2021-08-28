import { Controller, Get, Post, Body,Delete } from '@nestjs/common';
import { RoadmapService } from './roadmap.service'
import { RoadmapDto,UpdateRoadmapDto } from './roadmap.dto';
import { ApiTags } from '@nestjs/swagger';
import { Put,Param } from '@nestjs/common';
import { Observable } from 'rxjs';

@ApiTags("Roadmaps")
@Controller('roadmap')
export class RoadmapController {
    constructor(private readonly roadmapService: RoadmapService) { }
    @Get()
    findAll(): Promise<RoadmapDto[]> {
        return this.roadmapService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return this.roadmapService.findOne(id);
    }

    @Post()
    async create(@Body() roadmapDto: RoadmapDto) {
        return this.roadmapService.create(roadmapDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRoadmapDto: UpdateRoadmapDto) {
      return this.roadmapService.update(id,updateRoadmapDto);
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roadmapService.delete(id);
    }
   

}


