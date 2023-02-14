import {
  BookIcon,
  MoonIcon,
  StyledOption,
  StyledRowDiv,
  StyledSelect,
} from "./StyledComponents";
import { Switch } from "@mui/material";
import { useEffect } from "react";
import { useReducer } from "react";
import { initialState, reducer } from "./useReducer";

export const NavBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleState = () => {
    dispatch({ type: "theme" });
  };
  const toggleFont = (e) => {
    dispatch({ type: "font", payload: e.target.value });
    console.log(state.theme);
  };
  useEffect(() => {
    if (state.theme === true) {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
    document.body.style.fontFamily = state.font;
  }, [toggleState, toggleFont]);
  return (
    <StyledRowDiv navBar>
      <BookIcon />
      <div>
        <StyledSelect onChange={(e) => toggleFont(e)}>
          <option
            value="'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif"
          >
            Segoe UI
          </option>
          <option value="'Courier New', Courier, monospace">Courier New</option>
        </StyledSelect>
        <Switch onChange={toggleState} />
        <MoonIcon />
      </div>
    </StyledRowDiv>
  );
};
