import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { Config } from './access.model';

@Injectable()
export class AccessMiddleware implements NestMiddleware {
  private privateAccess: string;
  constructor(private configService: ConfigService<Config>) {
    this.privateAccess = configService.get<string>('PRIVATE_ACCESS_KEY');
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { accesskey } = req.headers

    if (accesskey == this.privateAccess) next()
    else res.status(401).json({ error: 'Not allowed' })
  }

}
