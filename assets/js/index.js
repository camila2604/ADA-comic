var base_url = 'https://gateway.marvel.com';
var api_key = '84d0b9f6b697a08a98c0419cce4cfb38';
var HASH = '4a467ffce992bde84ba21eba59dd7d4a';
fetch(base_url + "/v1/public/comics?apikey=" + api_key + "&hash=" + HASH)
    .then(function (response) {
    return response.json();
}).then(function (_a) {
    var data = _a.data;
    console.log(data);
    var comics = data.results;
    comics.forEach(function (comic) {
        var divComics = document.getElementById('container-comics');
        var divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.classList.add('col-10');
        divCard.classList.add('m-3');
        divCard.style.width = '20rem';
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
});
