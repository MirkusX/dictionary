import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataContext, SearchContext } from "./Components/Context";

function App() {
  const [search, setSearch] = useState("hello");
  const [data, setData] = useState();
  const [error, setError] = useState();
  const getData = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((res) => {
        setError(res);
      });
  };
  useEffect(() => {
    getData();
  }, [search]);
  if (data) {
    return (
      <DataContext.Provider value={{ data, setData }}>
        <SearchContext.Provider value={{ search, setSearch }}>
          <div className="App">
            <Frontpage />
          </div>
        </SearchContext.Provider>
      </DataContext.Provider>
    );
  }
}

export default App;
