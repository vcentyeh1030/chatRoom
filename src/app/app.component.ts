import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConnectWebSocket } from '@ngxs/websocket-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Chat Room';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new ConnectWebSocket());
  }
}
