// openai.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Controller('openai')
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Post('generate-text')
  @HttpCode(HttpStatus.OK)
  async generateText(@Body('prompt') prompt: string): Promise<string> {
    return this.openAIService.generateText(prompt);
  }
}
