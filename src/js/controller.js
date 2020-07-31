//global app controller
import { elements,renderLoader,clearLoader} from "./views/base";
import Search from "./models/Search";
import * as searchView from "./views/searchView";
import MapTemp from "./models/MapTemp";
import * as mapTempView from "./views/mapTempView";


const state ={

};


//Getting Map Temperature
const cities = ['delhi','mumbai','kolkata','chennai'];

for (var i=0; i<4; i++) {
  const map = new MapTemp(cities[i]);
  var call_api = async() => {
    await map.mapData(); 
    mapTempView.renderMapTemp(map.result);
  }
  call_api();  
}




const controlSearch = async() => {
    //1.Taking input from User in query
    const query = searchView.getInput();
    
    if(query){
        
        //2.Create new search object and add to state
        state.search = new Search(query);
        
        //3.Prepare UI on view
        searchView.clearInput();
        searchView.clearResult();
        renderLoader(elements.resultRender);
        
        //4.Search for Weather
        await state.search.getResults();
        
        //5.Render on UI
        clearLoader();
        searchView.renderWeather(state.search.result);
        
    }
}

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

