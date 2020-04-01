import Message from "./models/Message";

export function getNumberOfUnreadMessages(messages: Message[]): number {
  let count = 0;
  messages.forEach(function(message: Message) {
    !message.read && count++;
  });
  return count;
}

export function generateUUID(): string {
  let date1: number = new Date().getTime();
  let d2: number =
    (performance && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    let r: number = Math.random() * 16; //random number between 0 and 16
    if (date1 > 0) {
      // Use timestamp until depleted
      r = (date1 + r) % 16 | 0;
      date1 = Math.floor(date1 / 16);
    } else {
      // Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}
