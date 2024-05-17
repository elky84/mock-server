import { ApiProperty } from '@nestjs/swagger';

export class ResponseMockDto {
  @ApiProperty({ example: 'This is mock data for GET request' })
  message: string;

  @ApiProperty({ example: { key: 'value' } })
  data: Record<string, any>;
}

export class PostResponseMockDto {
  @ApiProperty({ example: 'This is mock data for POST request' })
  message: string;

  @ApiProperty({ example: { test: 'data' } })
  received: any;
}