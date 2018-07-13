'use strict';

let input = document.querySelector('input');
const form = document.querySelector(".js-form");
const result = document.querySelector(".js-result");

const key = '0b4d3de835b7469f8a0173433180907';

const resetResult = () => {
    result.innerHTML = '';
};

const handleFormSumit = e => {
    e.preventDefault();

    resetResult();

    let city = input.value;
    console.log(city); 
    fetchWeather(city);
};

const fetchWeather = city => 
    fetch(
        `http://api.apixu.com/v1/forecast.json?key=0b4d3de835b7469f8a0173433180907&q=${city}&days=7`,
    )
    .then(res => res.json())
    .then(data => {
        let forecast = data.forecast;
        let forecastday = forecast.forecastday;
        let newForecastday = [];

       forecastday.forEach(function(elem, index) {
            console.log(elem);
            console.log(index);
            newForecastday[index] = {
                day: elem.date,
                sunrise: elem.astro.sunrise,
                sunset: elem.astro.sunset,
                maxtemp: elem.day.maxtemp_c,
                mintemp: elem.day.mintemp_c,
                wind: elem.day.maxwind_mph,
                condition: elem.day.condition.text,
                img: elem.day.condition.icon.substring(2),
            }
        })

        console.log(newForecastday);
        showForecast(newForecastday);
    });

const showForecast = (newForecastday) => {
    const source = document.querySelector('#card-temp').innerHTML.trim();
    const template = Handlebars.compile(source);

    const markup = newForecastday.reduce((acc, day) => acc + template(day), '');;

    result.insertAdjacentHTML('afterbegin', markup); 
}

form.addEventListener('submit', handleFormSumit);
