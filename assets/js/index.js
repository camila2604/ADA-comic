var base_url = 'https://gateway.marvel.com';
var api_key = '84d0b9f6b697a08a98c0419cce4cfb38';
var HASH = '4a467ffce992bde84ba21eba59dd7d4a';
var generateCards = function (comics) {
    comics.forEach(function (comic) {
        var divComics = document.getElementById('container-comics');
        var divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.classList.add('col-10');
        divCard.classList.add('m-3');
        divCard.classList.add('card-style');
        divCard.style.width = '12rem';
        var divTitle = document.createElement('div');
        divTitle.classList.add('card-body');
        var title = document.createElement('h5');
        title.innerText = comic.title;
        var imgComic = document.createElement('img');
        imgComic.classList.add('car-img-top');
        imgComic.src = comic.thumbnail.path + '.' + comic.thumbnail.extension;
        divCard.appendChild(divTitle);
        divTitle.appendChild(title);
        divCard.appendChild(imgComic);
        divComics.appendChild(divCard);
    });
};
fetch(base_url + "/v1/public/comics?apikey=" + api_key + "&hash=" + HASH)
    .then(function (response) {
    return response.json();
}).then(function (_a) {
    var data = _a.data;
    // console.log(data);
    var totalResult = data.total;
    var results = document.getElementById('results');
    results.innerText = totalResult + ' RESULTADOS';
    var comics = data.results;
    generateCards(comics);
});
var selectType = document.getElementById('select_type');
var search_select = function () {
    var type = selectType.value;
    console.log(type);
    if (type === 'comics') {
        fetch(base_url + "/v1/public/comics?&apikey=" + api_key + "&hash=" + HASH)
            .then(function (response) {
            return response.json();
        })
            .then(function (rta) {
            console.log(rta);
            var comics = rta.data.results;
            generateCards(comics);
        });
    }
    else if (type === 'personajes') {
        fetch(base_url + "/v1/public/characters?&apikey=" + api_key + "&hash=" + HASH)
            .then(function (response) {
            return response.json();
        })
            .then(function (rta) {
            var comics = rta.data.results;
            generateCards(comics);
        });
    }
};
selectType.addEventListener('change', search_select);
