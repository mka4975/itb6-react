import * as React from "react";
import styled from "styled-components";

interface Props {
  currentTab: "trending" | "search";
  selectTab: Function;
}

const NavBar = styled.div`
  margin: 50px 0 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

interface NavItemProps {
  active: boolean;
}

const NavItem = styled.div<NavItemProps>`
  cursor: pointer;
  padding: 10px 20px;
  border-bottom: ${({ theme }): string => theme.color} 1px
    ${({ active }): string => (active ? "solid" : "hidden")};
`;

const Nav = ({ selectTab, currentTab }: Props): JSX.Element => {
  const currentTabActive = (tab: "trending" | "search"): boolean => {
    return currentTab === tab;
  };

  return (
    <NavBar>
      <NavItem
        active={currentTabActive("trending")}
        onClick={(): void => selectTab("trending")}
      >
        Trending
      </NavItem>
      <NavItem
        active={currentTabActive("search")}
        onClick={(): void => selectTab("search")}
      >
        Search
      </NavItem>
    </NavBar>
  );
};

export default Nav;
