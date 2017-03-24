import { Message } from './model/message';
import { MessageService } from './message.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  @Input()
  public messages: Message[] = [];
  public title = 'Movie Catalog';
  private messagesSub: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnDestroy(): void {
    this.messagesSub.unsubscribe();
  }

  ngOnInit(): void {
    this.messagesSub = this.messageService.messages.subscribe(msg => this.messages.push(msg));
  }
}
