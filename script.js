const searchBtn = document.getElementById('search');
const result = document.getElementById('result')
const searchInput = document.getElementById('input-wrapper');
searchBtn.addEventListener('click', searchBtnFunction);

function searchBtnFunction(){
    let countryName = searchInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital.join(''));
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(',').join(', '));
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flags-img">
        <h2>${data[0].name.common}</h2>
        <div class='wrapper'>
            <div class="container-capital">
                <h4>Capital : </h4>
                <span>${data[0].capital.join('')}</span>
            </div>
            <div class="container-capital">
                <h4>Continent : </h4>
                <span>${data[0].continents[0]}</span>
            </div>
            <div class="container-capital">
                <h4>Population : </h4>
                <span>${data[0].population}</span>
            </div>
            <div class="container-capital">
                <h4>Currency : </h4>
                <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
            </div>
            <div class="container-capital">
                <h4>Common languages : </h4>
                <span>${Object.values(data[0].languages).toString().split(',').join(', ')}</span>
            </div>
        </div>
        `
    })
}
