import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataContext, SearchContext } from "./Components/Context";

function App() {
  //search state
  const [search, setSearch] = useState("hello");
  //data state
  const [data, setData] = useState();
  //error state
  const [error, setError] = useState();
  //function that gets data
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
  //useeffect that gets data whenever search state is changed
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
