import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import Message from "../models/Message";

const Messages: FunctionComponent = ({
  messages,
  markMessageAsRead,
  unreadMessages
}) => {
  if (messages.length === 0) {
    return (
      <div className="alert alert-primary" role="alert">
        No messages yet!
      </div>
    );
  }
  return (
    <>
      {unreadMessages > 0 && (
        <div className="alert alert-danger" role="alert">
          You have {unreadMessages} unread message
          {unreadMessages > 1 ? "s" : ""}!
        </div>
      )}
      <ul className="list-group">
        {messages.map((message: Message) => (
          <li
            key={message.id}
            className="list-group-item"
            onClick={(): void => markMessageAsRead(message.id)}
          >
            <h3>{message.subject}</h3>
            <p>{message.text}</p>
            {!message.read && <span className="badge badge-info">Unread</span>}
          </li>
        ))}
      </ul>
    </>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  markMessageAsRead: PropTypes.func.isRequired,
  unreadMessages: PropTypes.number.isRequired
};

export default Messages;
