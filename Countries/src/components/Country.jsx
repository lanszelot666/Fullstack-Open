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
        style={{
          maxWidth: "200px",
          maxHeight: "200px",
          width: "auto",
          height: "auto",
          display: "block", // Ensures the image does not have extra space around it
        }}
      />
    </div>
  );
};

export default Country;
