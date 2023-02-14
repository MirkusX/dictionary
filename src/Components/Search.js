import { useContext, useRef, useState } from "react";
import { SearchContext } from "./Context";
import { SearchIcon, StyledForm, StyledInput } from "./StyledComponents";
import { InputAdornment } from "@mui/material";

export const Search = () => {
  //usecontext for search state
  const { setSearch } = useContext(SearchContext);
  //input state for storing userinput
  const [input, setInput] = useState("");
  //useref targetting form
  const form = useRef();
  //searchword function that sets search state the same as input state and resets form
  const searchWord = (e) => {
    e.preventDefault();
    setSearch(input);
    form.current.reset();
  };
  return (
    <StyledForm onSubmit={searchWord} ref={form}>
      <StyledInput
        type="text"
        onInput={(e) => setInput((input) => (input = e.target.value))}
        InputProps={{
          endAdornment: (
            <InputAdornment disableTypography position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </StyledForm>
  );
};
