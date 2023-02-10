import { useContext, useRef, useState } from "react";
import { SearchContext } from "./Context";

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
    <form onSubmit={searchWord} ref={form}>
      <input
        type="text"
        onInput={(e) => setInput((input) => (input = e.target.value))}
      />
    </form>
  );
};
