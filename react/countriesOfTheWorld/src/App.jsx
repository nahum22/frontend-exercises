import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { update } from "three/examples/jsm/libs/tween.module.js";

function App() {
  const url = "https://restcountries.com/v3.1/all?fields=name";
  // Assuming you want to store country names in state
  const [countryNames, setCountryNames] = useState([]);
  const [FilteredcountryNames, setFilteredCountryNames] = useState([]);

  const [input, SetInput] = useState("");

  const updateFilter = (e) => {
    SetInput(e.target.value);

    const filteredNames = countryNames.filter((item) => {
      return item.name.official.includes(input);
    });

    setFilteredCountryNames(filteredNames);
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
      <input type="text" onChange={updateFilter} />

      <div>
   
        {FilteredcountryNames.map((item) => (
          <p key={item.name.official}>{item.name.official}</p>
        ))}
      </div>
    </>
  );
}

export default App;
