import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { IRoadmap } from './interfaces/roadmap.interface';
import { RoadmapDto } from './roadmap.dto';
import { HttpException } from '@nestjs/common';


@Injectable()
export class RoadmapService {

  constructor(@InjectModel('Roadmap') private readonly roadmapModel: Model<IRoadmap>) { }

  public async findAll():Promise<RoadmapDto[]> {
    const roadmap = await this.roadmapModel.find().exec();
    if (!roadmap) {
      throw new HttpException('Not found', 404);
    }
    return roadmap;
  }

  
  public async createRoadmap(newRoadmap:RoadmapDto) {
    const roadmap = await new this.roadmapModel(newRoadmap);
    return roadmap.save()
  }

}
