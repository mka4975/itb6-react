import React, { useState, FunctionComponent } from "react";
import Messages from "./components/Messages";
import Nav from "./components/Nav";
import NewMessage from "./components/NewMessage";
import Message from "./models/Message";
import { getNumberOfUnreadMessages } from "./utils";

function App(): FunctionComponent {
  const [currentTab, setCurrentTab] = useState("messages");
  const [messages, setMessages] = useState([]);

  const selectTab = (tab: "messages" | "newMessage"): void => {
    setCurrentTab(tab);
  };

  const addMessage = (message: Message): void => {
    setMessages([...messages, message]);
    selectTab("messages");
  };

  const markMessageAsRead = (id: string): void => {
    setMessages(
      messages.map((message: Message) => {
        if (message.id === id) {
          message.read = true;
        }
        return message;
      })
    );
  };

  const unreadMessages = getNumberOfUnreadMessages(messages);

  const RenderTabPane = (): FunctionComponent => {
    switch (currentTab) {
      case "messages":
        return (
          <div className="tab-view">
            <Messages
              messages={messages}
              markMessageAsRead={markMessageAsRead}
              unreadMessages={unreadMessages}
            />
          </div>
        );
      case "newMessage":
        return (
          <div className="tab-view">
            <NewMessage addMessage={addMessage} />
          </div>
        );
    }
  };

  return (
    <div className="container">
      <h1>Message board</h1>
      <Nav
        selectTab={selectTab}
        currentTab={currentTab}
        unreadMessages={unreadMessages}
      />
      <RenderTabPane />
    </div>
  );
}

export default App;
