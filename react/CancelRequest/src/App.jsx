import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { update } from "three/examples/jsm/libs/tween.module.js";
import Data from "./Data";

function App() {
  const url = "https://restcountries.com/v3.1/all?fields=name";
  // Assuming you want to store country names in state
  const [countryNames, setCountryNames] = useState([]);
  const [FilteredcountryNames, setFilteredCountryNames] = useState([]);

  const [input, SetInput] = useState(false);

  const showOrHide = () => {
    SetInput(!input);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFilteredCountryNames(data);
      setCountryNames(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <input type="button" onClick={showOrHide} />
      {input ? <Data /> : ""}
    </>
  );
}

export default App;
