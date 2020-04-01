import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  theme: string;
  setTheme: Function;
}

const ThemeSwitchContainer = styled.div`
  text-align: center;
`;

const ThemeSwitch: FunctionComponent = ({ theme, setTheme }: Props) => {
  return (
    <ThemeSwitchContainer>
      <input
        type="checkbox"
        onChange={(): void => setTheme(theme === "dark" ? "light" : "dark")}
        value={theme === "dark"}
      />
      <label> Dark theme</label>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
