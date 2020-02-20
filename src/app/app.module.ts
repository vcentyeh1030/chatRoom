import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { stateList } from './store/state-list';
import { MessageBoxComponent } from './components/messages-box/message-box/message-box.component';
import { TypingAreaComponent } from './components/typing-area/typing-area/typing-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    TypingAreaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([...stateList]),
    NgxsWebsocketPluginModule.forRoot({
      url: 'wss://aqueous-plains-03415.herokuapp.com:8080'
      // url: 'ws://localhost:8080'
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
