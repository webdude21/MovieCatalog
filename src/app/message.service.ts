import { Message } from './model/message';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {
  private messagePublisher = new Subject<Message>();
  public messages: Observable<Message> = this.messagePublisher.asObservable();

  constructor() { }

  addMessage(...messages: Message[]): void {
    messages.forEach(msg => this.messagePublisher.next(msg));
  }
}
