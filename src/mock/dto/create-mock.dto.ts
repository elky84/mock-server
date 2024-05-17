import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMockDto {
  @ApiProperty({ example: 'data', description: 'Sample data field' })
  @IsString()
  data: string;
}
