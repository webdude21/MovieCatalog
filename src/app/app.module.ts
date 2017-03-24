import { LoggerService } from './logger.service';
import { MessageService } from './message.service';
import { GlobalErrorHandler } from './error-handler/global-error-handler';
import { MovieSearchModule } from './movie-search/movie-search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MessagesModule,
    BrowserModule,
    MovieSearchModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }, MessageService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
