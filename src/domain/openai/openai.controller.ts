import { Controller, Get, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Controller('openai')
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Get('generate-text')
  @HttpCode(HttpStatus.OK)
  async generateText(): Promise<{ message: string }> {
    return this.openAIService.generateText();
  }
}
