async function beers() {
    const response = await fetch(`https://api.punkapi.com/v2/beers?per_page=40`)
    const data = await response.json()
    createBeersList(data);
}

beers()

// Les 3 fonctions suivantes font la même chose, afficher une liste de nom de bière

// function createBeersList(beersList) {
//     const beer = document.getElementById('display');
//     beersList.map(element => beer.innerHTML += `<p>${element.name}</p>`);
// }

// function createBeersList(beersList) {
//     const beer = document.getElementById('display');
//     for (let i = 0; i < beersList.length; i++) {
//         beer.innerHTML += `<p>${beersList[i].name}</p>`;
//     }
// }

function createBeersList(beersList) {
    const beer = document.getElementById('display');
    beer.innerHTML +=
        `
    ${Object.values(beersList).map(function (beer) {
        return `<p>${beer.name}<p>`
    }).join('')}
    `
}