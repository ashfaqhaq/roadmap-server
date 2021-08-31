import { Controller, Get, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { RoadmapService } from './roadmap.service'
import { RoadmapDto, UpdateRoadmapDto } from './roadmap.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Put, Param } from '@nestjs/common';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';

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
  @UseGuards(AuthorizationGuard)
  @ApiBearerAuth('token')
  @Post()
  async create(@Body() roadmapDto: RoadmapDto) {
    return this.roadmapService.create(roadmapDto)
  }

  @UseGuards(AuthorizationGuard)
  @ApiBearerAuth('token')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoadmapDto: UpdateRoadmapDto) {
    return this.roadmapService.update(id, updateRoadmapDto);
  }

  @UseGuards(AuthorizationGuard)
  @ApiBearerAuth('token')
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.roadmapService.delete(id);
  }


}


