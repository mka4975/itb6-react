import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";

const Nav: FunctionComponent = ({ selectTab, currentTab, unreadMessages }) => {
  const currentTabActive = (tab: "messages" | "newMessage"): string => {
    return `nav-link ${currentTab === tab ? "active" : ""}`;
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <div
          className={currentTabActive("messages")}
          onClick={(): void => selectTab("messages")}
        >
          Messages ({unreadMessages > 5 ? "5+" : unreadMessages} new)
        </div>
      </li>
      <li className="nav-item">
        <div
          className={currentTabActive("newMessage")}
          onClick={(): void => selectTab("newMessage")}
        >
          New Message
        </div>
      </li>
    </ul>
  );
};

Nav.propTypes = {
  currentTab: PropTypes.oneOf(["messages", "newMessage"]).isRequired,
  selectTab: PropTypes.func.isRequired,
  unreadMessages: PropTypes.number.isRequired
};

export default Nav;
