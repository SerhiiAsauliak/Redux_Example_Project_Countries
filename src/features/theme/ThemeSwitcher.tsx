import { IoSunnyOutline, IoMoon } from "react-icons/io5";
import styled from "styled-components";
import { useTheme } from "./use-theme";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const ThemeSwitcher = () => {
  const [theme, onToggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={() => onToggleTheme()}>
      {theme === "light" ? (
        <IoSunnyOutline size="14px" />
      ) : (
        <IoMoon size="14px" />
      )}{" "}
      <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
    </ModeSwitcher>
  );
};
