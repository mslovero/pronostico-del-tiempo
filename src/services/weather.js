import { ajax } from "../tools/ajax";

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
          params: {
            q: city,
            appid: "4ee5a999466686243939f63fed5b75ba",
            units: "metric"//grados centigrados
          }
     };
    return await ajax(optionsRequest)
}
