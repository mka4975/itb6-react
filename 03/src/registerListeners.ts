import { clickOnTab, addNewMessage, markMessageAsRead } from "./main";
import { generateUUID } from "./utils";
import Message from "./Message";

export function registerTabListeners(): void {
  document
    .getElementById("messages-link")
    .addEventListener("click", function() {
      clickOnTab(0);
    });

  document
    .getElementById("add-new-message-link")
    .addEventListener("click", function() {
      clickOnTab(1);
    });
}

export function registerFormListener(): void {
  const form = document.getElementById(
    "add-new-message-form"
  ) as HTMLFormElement;

  form.addEventListener("submit", function(event: Event) {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(generateUUID());
    addNewMessage({
      id: generateUUID(),
      subject: formData.get("subject") as string,
      text: formData.get("text") as string,
      read: false
    });
  });
}

export function registerMessageClickListener(messages: Message[]): void {
  messages.forEach(function(message: Message) {
    document.getElementById(message.id).addEventListener("click", function() {
      markMessageAsRead(message.id);
    });
  });
}
