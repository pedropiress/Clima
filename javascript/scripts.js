//Variaveis e seleção de elementos
const apiKey = "4c3015646e76fee4d5a89bba4fe8a76c";
const apiCountryURL = "https://flagsapi.com/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

//Funções
const getWeatherData = async (city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return(data);
}

const showWeatherData = async (city) => {
    const weatherData = await getWeatherData(city);
    console.log(weatherData);
}

//Eventos
searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const city = cityInput.value;

    console.log(city);
});
