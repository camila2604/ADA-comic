var base_url = 'https://gateway.marvel.com/v1/public/';
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
        var title = document.createElement('p');
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
// &${searchKey}=${s}
var fetchData = function (type, s, order) {
    var url = "" + base_url + type + "?apikey=" + api_key + "&hash=" + HASH;
    if (s) {
        if (type === 'comics') {
            url += "&title=" + s;
        }
        else {
            url += "&name=" + s;
        }
    }
    url += order ? "&orderBy=" + order : '';
    console.log(url);
    fetch(url)
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
};
var init = function () {
    var params = new URLSearchParams(window.location.search);
    var search = params.get('s');
    var type = params.get('type');
    var order = params.get('order');
    fetchData(type || 'comics', search, order);
};
init();
var searchForm = document.getElementById('form-search');
var btnSearch = document.getElementById('btn-search');
var url = '';
var handleSearchSubmit = function (e) {
    e.preventDefault();
    var search = e.target.title.value;
    var type = e.target.type.value;
    var order = e.target.order.value;
    var params = new URLSearchParams(window.location.search);
    params.set('s', search);
    params.set('type', type);
    params.set('orderBy', order);
    window.location.href = window.location.hash + '?' + params.toString();
};
searchForm.addEventListener('submit', handleSearchSubmit);
var selectCharacters = document.getElementById('divCharacters');
var selectComics = document.getElementById('divComics');
var selectType = document.getElementById('type');
// Funcion select ocultar/mostrar
var showSelect = function (e) {
    e.preventDefault();
    var options = document.getElementsByTagName('option');
    console.log(options);
    options.map(function (element) {
        if (element.dataset.type === 'character') {
            selectComics.classList.add('d-none');
            selectCharacters.classList.remove('d-none');
        }
        else {
            selectCharacters.classList.add('d-none');
            selectComics.classList.remove('d-none');
        }
    });
    // if (selectType.value === 'characters') {
    //     selectComics.classList.add('d-none');
    //     selectComics.setAttribute('disabled', 'disabled');
    //     selectCharacters.classList.remove('d-none');
    //     selectCharacters.removeAttribute('disabled')
    // } else {
    //     selectCharacters.classList.add('d-none');
    //     selectCharacters.setAttribute('disabled', 'disabled');
    //     selectComics.classList.remove('d-none');
    //     selectComics.removeAttribute('disabled');
    // }
};
selectType.addEventListener('change', showSelect);
// PAGINACION
var btnStart = document.getElementById('btn-start');
var btnEnd = document.getElementById('btn-end');
var btnNext = document.getElementById('btn-next');
var btnPrevius = document.getElementById('btn-previus');
// const handlePaginationClick = () => {
var nextPage = function () {
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page');
    if (!page) {
        params.set('page', '2');
    }
    else {
        params.set('page', page + 1);
    }
    console.log('hola');
};
var previusPage = function () {
    var params = new URLSearchParams(window.location.search);
    var page = Number(params.get('page'));
    if (page > 1) {
        params.set('page', page - 1);
    }
};
var startPage = function () {
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page');
    params.set('page', '1');
    // btnPrevius.disabled = true;
    // btnEnd.disabled = true;
};
btnNext.addEventListener('click', nextPage);
btnPrevius.addEventListener('click', previusPage);
btnStart.addEventListener('click', startPage);
