import React, { FunctionComponent } from "react";
import Message from "../models/Message";
import styled from "styled-components";

const red = "#ff4b0f";

interface Props {
  messages: Array<Message>;
  markMessageAsRead: Function;
  unreadMessages: number;
}

const NoMessagesYet = styled.div`
  text-align: center;
`;

const Banner = styled.div`
  border: 1px solid ${red};
  border-radius: 2px;
  padding: 10px;
  color: ${red};
  text-align: center;
`;

const MessageList = styled.ul`
  padding: 0;
`;

const MessageListItem = styled.li`
  list-style-type: none;
  padding: 0 10px 20px 10px;
  border: ${({ theme }): string => theme.color} solid
    ${({ unread }): string => (unread ? "2px" : "1px")};
  border-radius: 2px;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: center;
`;

const Unread = styled.span`
  color: ${red};
  border: 1px solid ${red};
  border-radius: 2px;
  padding: 5px;
`;

const Messages: FunctionComponent = ({
  messages,
  markMessageAsRead,
  unreadMessages
}: Props) => {
  if (messages.length === 0) {
    return <NoMessagesYet>No messages yet!</NoMessagesYet>;
  }
  return (
    <>
      {unreadMessages > 0 && (
        <Banner>
          You have {unreadMessages} unread message
          {unreadMessages > 1 ? "s" : ""}!
        </Banner>
      )}
      <MessageList>
        {messages.map((message: Message) => (
          <MessageListItem
            unread={!message.read}
            key={message.id}
            onClick={(): void => markMessageAsRead(message.id)}
          >
            <h3>{message.subject || "Empty message"}</h3>
            <p>{message.text}</p>
            {!message.read && <Unread>Unread</Unread>}
          </MessageListItem>
        ))}
      </MessageList>
    </>
  );
};

export default Messages;
