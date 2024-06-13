import React from "react";
import { useEffect, useState } from "react";
const Data = () => {
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    let isMounted = true; // Track whether component is mounted
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setCountryNames(data); // Update state
        }
      });

    return () => {
      isMounted = false; // Cleanup
    };
  }, []);

  return (
    <div>
      {countryNames.map((item) => (
        <p key={item.name.official}>{item.name.official}</p>
      ))}
    </div>
  );
};

export default Data;
