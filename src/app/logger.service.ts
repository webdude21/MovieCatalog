import { Message } from './model/message';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(message: Message) {
    switch (message.severity) {
      case 'error': console.error(message.detail);
        break;
      // tslint:disable-next-line:no-console
      case 'info': console.info(message.detail);
        break;
      case 'warn': console.warn(message.detail);
        break;
      default: console.log(message.detail)
    }
  }
}
