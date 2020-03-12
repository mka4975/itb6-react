import Message from "./Message";
import { getNumberOfUnreadMessages } from "./utils";

export default function(messages: Message[]): void {
  const container: Element = document.getElementById("tab-view");
  container.innerHTML = "";

  if (messages.length === 0) {
    container.innerHTML = `
      <div class="alert alert-primary" role="alert">
        No messages yet!
      </div>
    `;
  } else {
    let rows = "";

    messages.forEach(function(message: Message) {
      rows =
        rows +
        `
          <li id="${message.id}" class="list-group-item">
            <h3>${message.subject}</h3>
            <p>${message.text}</p>
            ${
              !message.read
                ? '<span class="badge badge-info">Unread</span>'
                : ""
            }
          </li>
        `;
    });

    const list = `<ul class="list-group">${rows}</ul>`;
    let banner = "";
    const numUnreadMessages: number = getNumberOfUnreadMessages(messages);

    if (numUnreadMessages > 0) {
      banner = `
        <div class="alert alert-danger" role="alert">
          You have ${numUnreadMessages} unread message${
        numUnreadMessages > 1 ? "s" : ""
      }!
        </div>
      `;
    }

    container.innerHTML = banner + list;
  }
}
