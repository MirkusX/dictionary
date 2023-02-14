import { BookIcon, MoonIcon, StyledRowDiv } from "./StyledComponents";
import { Switch } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    if (toggle === true) {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  }, [toggle]);
  return (
    <StyledRowDiv navBar>
      <BookIcon />
      <div>
        <select>
          <option>Font 1</option>
          <option>Font 2</option>
        </select>
        <Switch onChange={toggleState} />
        <MoonIcon />
      </div>
    </StyledRowDiv>
  );
};
