import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SendWebSocketMessage } from '@ngxs/websocket-plugin';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-typing-area',
  templateUrl: './typing-area.component.html',
  styleUrls: ['./typing-area.component.scss']
})
export class TypingAreaComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    message: new FormControl('')
  });
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.form.value.name || !this.form.value.message) {
      return;
    }
    this.sendMessage(this.form.value.name, this.form.value.message);
    this.form.get('message').reset();
  }
  sendMessage(from: string, message: string) {
    const event = new SendWebSocketMessage({
      type: 'message',
      from,
      message
    });
    this.store.dispatch(event);
  }

}
