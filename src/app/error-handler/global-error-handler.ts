import { LoggerService } from '../logger.service';
import { MessageService } from '../message.service';
import { ErrorHandler, Injectable } from '@angular/core';
import { Message } from '../model/message';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private messageService: MessageService, private loggerService: LoggerService) { }

  handleError(error: any): void {
    const message = new Message('Error', 'Service unavailable', 'error');
    this.messageService.addMessage(message);
    this.loggerService.log(message);
  }
}
