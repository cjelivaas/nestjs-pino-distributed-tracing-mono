import { Controller, Logger, Post, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Pino')
export class AppController {
  logger = new Logger(AppController.name);
  //Inject the default nest js logger (Overridden by pino logger if env != dev)
  constructor(private readonly appService: AppService) {}

  @Post('/functions/createBooking')
  createBooking(@Headers() headers) {
    console.log(headers);
    //this.logger.log(new Date(), '');
    return this.appService.getHello();
  }
}
