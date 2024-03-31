import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

const getWeather = (city) => {
  const params = {
    q: city,
    APPID: import.meta.env.VITE_API_KEY,
  };

  const request = axios.get(baseUrl, { params });
  return request.then((response) => response.data);
};

export default { getWeather };
