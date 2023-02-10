import { useContext, useRef, useState } from "react";
import { SearchContext } from "./Context";
import { SearchIcon, StyledForm, StyledInput } from "./StyledComponents";
import { InputAdornment } from "@mui/material";

export const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [input, setInput] = useState("");
  const form = useRef();
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
