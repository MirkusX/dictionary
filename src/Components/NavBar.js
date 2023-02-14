import { BookIcon, MoonIcon, StyledRowDiv } from "./StyledComponents";
import { Switch } from "@mui/material";

export const NavBar = () => {
  return (
    <StyledRowDiv navBar>
      <BookIcon />
      <div>
        <select>
          <option>Font 1</option>
          <option>Font 2</option>
        </select>
        <Switch />
        <MoonIcon />
      </div>
    </StyledRowDiv>
  );
};
