import {elements} from "./base";

export const renderMapTemp = (temp) => {
    const markup = `
                <div class="map_location ${temp.name}">
                    <i class="fa fa-stop"></i>
                    <span class="location_temp"  id="temp_${temp.name}">${temp.main.temp} &#8451</span> <br>
                    <span class="location_name">${temp.name}</span>   
                </div>
    `;

    elements.tempRender.insertAdjacentHTML('beforeend',markup);
};