export const elements = {
    button: document.querySelector(".search_btn"),
    searchInput: document.querySelector(".search_input"),
    searchForm: document.querySelector(".search_form"),
    resultRender: document.querySelector(".result"),
    tempRender: document.querySelector(".map_image")
};

export const elementString = {
    loader :'loader'
};

export const renderLoader = (parent) => {
    const loadMarkup = `
    <div class="${elementString.loader}">
        <svg>
            <use href="./img/icons.svg#icon-cw"></use>
        </svg>
    </div>`;
    parent.insertAdjacentHTML('afterbegin',loadMarkup);

};

export const clearLoader = () => {
     const loader = document.querySelector(`.${elementString.loader}`);

    if(loader) loader.parentElement.removeChild(loader);
};