import axios from "axios";
// const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";
const baseUrl = "https://restcountries.com/v3.1";

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) =>
    response.data.map((country, index) => ({
      id: index,
      name: country.name.common,
    }))
  );
};

const getOne = (countryName) => {
  const request = axios.get(`${baseUrl}/name/${countryName}`);
  return request.then((response) => {
    // Log the entire response object
    console.log("Response:", response);

    // If you just want to log the data part
    console.log("Data:", response.data);

    const countryResponse = response.data[0];

    return {
      id: 0,
      name: countryResponse.name.common,
      capital: countryResponse.capital[0],
      area: countryResponse.area,
      languages: countryResponse.languages,
      flag: countryResponse.flags.svg,
      flagAlt: countryResponse.flags.alt
    };
  });
};

export default { getAll, getOne };
