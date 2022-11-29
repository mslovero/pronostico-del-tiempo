import { ajax } from "../tools/ajax";

export const getCities = async   countryCode =>{
    const optionsRequest = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places",
        headers: {
            'X-RapidAPI-Key': '990b1e6ca4msh7542119bfe05f19p13387djsnaabbe8d35bc8',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
          },
          params: {
            limit: 20,
            type: "CITY",
            country: countryCode ?? "US",
          }
     };
    return await ajax(optionsRequest)
}
