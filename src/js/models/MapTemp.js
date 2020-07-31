import axios from 'axios';
import {key} from '../config';

export default  class MapTemp{
    constructor(mapCity)
    {
       this.query = mapCity;
    }

    async mapData() {
        try {
            const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&appid=${key}`);
            this.result = res.data;
        } 
        catch (error) {
            alert(error);
        }
    }
    
}