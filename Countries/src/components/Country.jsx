const Country = ({ country }) => {
  // console.log("INSIDE COUNTRY: ", country);
  return (
    <div>
      <h1>{country.name}</h1>
      <div>Captital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([abbrev, lang]) => (
          <li key={abbrev}>{lang}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={country.flagAlt}
        title={country.flagAlt}
        style={{
          maxWidth: "200px",
          maxHeight: "200px",
          width: "auto",
          height: "auto",
          display: "block", // Ensures the image does not have extra space around it
        }}
      />
      <h2>Weather in {}country.capital</h2>
      <div>Temperature: {country.weather.temperature} Celsius degrees</div>
      <img
        src={country.weather.icon}
        alt={country.weather.description}
        title={country.weather.description}
        style={{
          maxWidth: "200px",
          maxHeight: "200px",
          width: "auto",
          height: "auto",
          display: "block",
        }}
      />
      <div>Wind: {country.weather.wind} km/h</div>
    </div>
  );
};

export default Country;
