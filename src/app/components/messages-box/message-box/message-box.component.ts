import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { MessagesState, Message } from "src/app/store/message.states";
import { Observable } from "rxjs";

@Component({
  selector: "app-message-box",
  templateUrl: "./message-box.component.html",
  styleUrls: ["./message-box.component.scss"],
})
export class MessageBoxComponent implements OnInit {
  @Select(MessagesState) messages$: Observable<Message[]>;

  constructor() {}

  ngOnInit(): void {}
}
