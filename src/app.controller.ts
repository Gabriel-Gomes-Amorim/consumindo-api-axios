import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import axios from 'axios';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get('/gerar-mensagem')
  async get(@Res() res: Response, @Req() req: Request): Promise<Response> {
    try {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      return res.status(HttpStatus.CREATED).json({ message: data.slip.advice });
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'erro ao gerar mensagem!', error: error });
    }
  }
}
