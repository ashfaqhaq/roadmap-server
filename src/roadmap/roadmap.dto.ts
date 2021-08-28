import { ApiProperty,IntersectionType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class MetadataDTO {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly rating: number;
}

export class StepDto {
    @ApiProperty()
    readonly steps: any;
}

export class RoadmapDto extends IntersectionType(
    MetadataDTO,
    StepDto,
  ) {}

  export class UpdateRoadmapDto {
    @ApiProperty()
    readonly name?: string;
    @ApiProperty()
    readonly description?: string;
    @ApiProperty()
    readonly rating?: number;
}