export class AddMessage {
  static type = "[Chat] Add message";
  constructor(public from: string, public message: string) {}
}
