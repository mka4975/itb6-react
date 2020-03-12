import { setActiveTab, setUnreadMessagesCount } from "./manageTabs";
import {
  registerTabListeners,
  registerMessageClickListener,
  registerFormListener
} from "./registerListeners";
import Message from "./Message";
import renderMessagesTable from "./renderMessages";
import renderAddNewMessage from "./renderAddNewMessage";
import { getNumberOfUnreadMessages } from "./utils";

// The state of the app
let messages: Message[] = [];
let activeTab = 0;

// The main render function which is called after every update
// to refresh the view
function render(): void {
  setActiveTab(activeTab);
  setUnreadMessagesCount(getNumberOfUnreadMessages(messages));

  switch (activeTab) {
    case 0:
      renderMessagesTable(messages);
      registerMessageClickListener(messages);
      break;
    case 1:
      renderAddNewMessage();
      registerFormListener();
      break;
  }
}

export function clickOnTab(tab: number): void {
  activeTab = tab;
  render();
}

export function addNewMessage(message: Message): void {
  messages = [message, ...messages];
  render();
}

export function markMessageAsRead(id: string): void {
  messages.forEach(function(message: Message) {
    if (message.id === id) {
      message.read = true;
    }
  });
  render();
}

render();
registerTabListeners();
