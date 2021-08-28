import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { IRoadmap } from './interfaces/roadmap.interface';
import { RoadmapDto, UpdateRoadmapDto } from './roadmap.dto';
import { HttpException } from '@nestjs/common';


@Injectable()
export class RoadmapService {

  constructor(@InjectModel('Roadmap') private readonly roadmapModel: Model<IRoadmap>) { }

  public async findAll(): Promise<RoadmapDto[]> {
    const roadmap = await this.roadmapModel.find().exec();
    if (!roadmap) {
      throw new HttpException('Not found', 404);
    }
    return roadmap;
  }

  public async findOne(id: string) {
    const roadmap = await this.roadmapModel.findById(id);
    if (!roadmap) {
      throw new HttpException('Not found', 404);
    }
    return roadmap;
  }

  public async create(newRoadmap: RoadmapDto) {
    const roadmap = await new this.roadmapModel(newRoadmap);
    return roadmap.save()
  }

  public async update(id: string, newRoadmap: UpdateRoadmapDto) {
    const roadmap = await new this.roadmapModel(newRoadmap);
    return await this.roadmapModel.findByIdAndUpdate(id, newRoadmap, { new: true });

  }
  public async delete(id: string) {
    return await this.roadmapModel.findByIdAndRemove(id);
  }


}
