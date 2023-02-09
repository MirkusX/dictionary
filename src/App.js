import logo from "./logo.svg";
import "./App.css";
import { Frontpage } from "./Pages/Frontpage";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "./Components/Context";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const getData = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
      .then((res) => {
        setData(res.data);
      })
      .catch((res) => {
        setError(res);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (data) {
    return (
      <DataContext.Provider value={{ data, setData }}>
        <div className="App">
          <Frontpage />
        </div>
      </DataContext.Provider>
    );
  }
}

export default App;
