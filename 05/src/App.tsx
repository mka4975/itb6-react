import React, { useState, FunctionComponent } from "react";
import Messages from "./components/Messages";
import Nav from "./components/Nav";
import NewMessage from "./components/NewMessage";
import Message from "./models/Message";
import { getNumberOfUnreadMessages } from "./utils";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import ThemeSwitch from "./components/ThemeSwitch";

const themes = {
  dark: {
    bgColor: "#626569",
    color: "#edf0f2"
  },
  light: {
    bgColor: "#edf0f2",
    color: "#626569"
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Courier New', Courier, monospace;
    background-color: ${({ theme }): string => theme.bgColor};
    color: ${({ theme }): string => theme.color}
  }

  h1 {
    text-align: center;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

function App(): FunctionComponent {
  const [currentTab, setCurrentTab] = useState("messages");
  const [messages, setMessages] = useState([]);
  const [theme, setTheme] = useState("light");

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

  return (
    <ThemeProvider theme={themes[theme]}>
      <Container>
        <GlobalStyle />
        <h1>Message board</h1>
        <ThemeSwitch theme={theme} setTheme={setTheme} />
        <Nav
          selectTab={selectTab}
          currentTab={currentTab}
          unreadMessages={unreadMessages}
        />
        {currentTab === "messages" ? (
          <Messages
            messages={messages}
            markMessageAsRead={markMessageAsRead}
            unreadMessages={unreadMessages}
          />
        ) : (
          <NewMessage addMessage={addMessage} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
