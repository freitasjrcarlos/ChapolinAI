import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OpenAIService {
  private readonly apiHost = process.env.OPENAI_API_HOST;
  private readonly apiKey = process.env.OPENAI_API_KEY;

  async generateText(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        this.apiHost,
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error(error.response.data);
      throw new Error('Error communicating with OpenAI API');
    }
  }
}
