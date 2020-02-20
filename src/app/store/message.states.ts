import { State, Action, StateContext } from '@ngxs/store';
import { AddMessage } from './message.actions';

export interface Message {
  from: string;
  message: string;
}

@State<Message[]>({
  name: 'message',
  defaults: []
})
export class MessagesState {
  @Action(AddMessage)
  addMessage(ctx: StateContext<Message[]>, { from, message }: AddMessage) {
    const state = ctx.getState();
    ctx.setState([...state, { from, message }]);
  }
}
