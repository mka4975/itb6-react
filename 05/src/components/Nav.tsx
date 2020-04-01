import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  currentTab: "messages" | "newMessage";
  selectTab: Function;
  unreadMessages: number;
}

const NavBar = styled.div`
  margin: 50px 0 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  border-bottom: ${({ theme }): string => theme.color} 1px
    ${({ active }): string => (active ? "solid" : "hidden")};
`;

const Nav: FunctionComponent = ({
  selectTab,
  currentTab,
  unreadMessages
}: Props) => {
  const currentTabActive = (tab: "messages" | "newMessage"): boolean => {
    return currentTab === tab;
  };

  return (
    <NavBar>
      <NavItem
        active={currentTabActive("messages")}
        onClick={(): void => selectTab("messages")}
      >
        Messages ({unreadMessages > 5 ? "5+" : unreadMessages} new)
      </NavItem>
      <NavItem
        active={currentTabActive("newMessage")}
        onClick={(): void => selectTab("newMessage")}
      >
        New Message
      </NavItem>
    </NavBar>
  );
};

export default Nav;
