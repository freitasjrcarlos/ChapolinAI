import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OpenAIService {
  private readonly apiHost = process.env.OPENAI_API_HOST;
  private readonly apiKey = process.env.OPENAI_API_KEY;

  async generateText(): Promise<{ message: string }> {
    try {
      const response = await axios.post(
        this.apiHost,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content:
                'Crie uma frase engraçada no estilo do Chapolin Colorado:',
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      );

      const chapolinResponse = {
        message: response.data.choices[0].message.content,
      };

      return chapolinResponse;
    } catch (error) {
      console.error(error.response.data);
      throw new Error('Error communicating with OpenAI API');
    }
  }
}
