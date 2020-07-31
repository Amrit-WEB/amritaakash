import axios from 'axios';
import {key} from '../config';

export default class Search {

    constructor(cityName){
        this.query = cityName;
    }
    async getResults() {
        try {
            const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${key}`);
            this.result = res.data;
        
        } catch (error) {
            alert("Something is Worng!!");
        }
    }
    
}