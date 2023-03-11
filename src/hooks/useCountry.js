import { useState, useEffect } from "react";

export function useCountry() {
  const [countries, setCountries] = useState([]);
  const [disable, setDisable] = useState(false);

  const fetchCountry = async () => {
    try {
      const apiCall = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const response = await apiCall.json();
      const countriesAndCities = response.data;

      const countries = countriesAndCities.map((country) => {
        return {
          main: country.country,
        };
      });

      setCountries(countries);
    } catch (error) {
      console.log(error);
      setDisable(true);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return {
    countries,
    disable,
  };
}
