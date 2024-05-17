import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateMockDto } from './dto/create-mock.dto';
import { ResponseMockDto, PostResponseMockDto } from './dto/response-mock.dto';

@ApiTags('mock')
@Controller('mock')
export class MockController {

  @Get()
  @ApiOperation({ summary: 'Get mock data' })
  @ApiResponse({ status: 200, description: 'Return mock data for GET request', type: ResponseMockDto })
  getMockData(): ResponseMockDto {
    return {
      message: 'This is mock data for GET request',
      data: { key: 'value' }
    };
  }

  @Post()
  @ApiOperation({ summary: 'Post mock data' })
  @ApiBody({ type: CreateMockDto })
  @ApiResponse({ status: 201, description: 'Return mock data for POST request', type: PostResponseMockDto })
  postMockData(@Body() body: CreateMockDto): PostResponseMockDto {
    return {
      message: 'This is mock data for POST request',
      received: body
    };
  }
}
