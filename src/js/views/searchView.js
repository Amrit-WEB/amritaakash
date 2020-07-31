import {elements} from './base';
import Search from '../models/Search';
export const getInput = () => elements.searchInput.value;

export const renderWeather = (cityWeather) =>{ 
    
    const markup = 
`
                <div class="temp">${(cityWeather.main.temp-273).toFixed(2)} &#8451</div>
            <div class="part">
                <div class="main_icon">
                    <img src="http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png" alt="weather_icon">
                </div>
                <div class="place">${cityWeather.name}</div>
            </div> 
                <div class="desc">${cityWeather.weather[0].description}</div>
                <div class="wind">Wind Speed : ${cityWeather.wind.speed} kmph</div>
                <div class="humidity">Humidity : ${cityWeather.main.humidity} %</div>
                <button class="more_btn"><a href="https://amrit-web.github.io/projects/weather/" target="_blank"></a>Detail</button>
            
        
`;

    elements.resultRender.insertAdjacentHTML('beforeend',markup);
                                 
};


export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResult = () => {
    elements.resultRender.innerHTML = '';
};