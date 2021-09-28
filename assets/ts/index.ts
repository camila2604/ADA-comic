const base_url: string = 'https://gateway.marvel.com/v1/public/';
const api_key: string = '84d0b9f6b697a08a98c0419cce4cfb38';
const HASH: string = '4a467ffce992bde84ba21eba59dd7d4a';


const generateCards = (comics) => {
    comics.forEach(comic => {
        const divComics = document.getElementById('container-comics');
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.classList.add('col-10');
        divCard.classList.add('m-3');
        divCard.classList.add('card-style')
        divCard.style.width = '12rem';
        

        const divTitle = document.createElement('div');
        divTitle.classList.add('card-body');
        const title = document.createElement('p');
        title.innerText = comic.title;

        const imgComic = document.createElement('img');
        imgComic.classList.add('car-img-top');
        imgComic.src = comic.thumbnail.path + '.' + comic.thumbnail.extension;
        
        divCard.appendChild(divTitle);
        divTitle.appendChild(title);
        divCard.appendChild(imgComic);
        divComics.appendChild(divCard);
    
    });
}

// &${searchKey}=${s}
const fetchData = (type, s, order) => {

    let url = `${base_url}${type}?apikey=${api_key}&hash=${HASH}&orderBy=${order}`;

    if(s) {
        if(type === 'comics') {
            url += `&title=${s}`;
        } else {
            url += `&name=${s}`;
        }
    }

    fetch(url)
        .then((response) =>{
            return response.json();
        }).then(({data})=>{
            // console.log(data);
            const totalResult = data.total;
            const results = document.getElementById('results');
            results.innerText = totalResult + ' RESULTADOS';

            const comics: Comic[] = data.results;

            generateCards(comics);
                
        })
}

const init = () => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('s');
    const type = params.get('type');
    const order = params.get('order');
    fetchData(type, search, order);
    }
init();



const searchForm = document.getElementById('form-search');
const btnSearch = document.getElementById('btn-search');
let url= '';

const handleSearchSubmit = (e) => {
    e.preventDefault();
    const search = e.target.title.value;
    const type = e.target.type.value;
    const order = e.target.order.value;
   
    const params = new URLSearchParams(window.location.search);
    params.set('s', search);
    params.set('type', type);
    params.set('order', order);
    window.location.href=window.location.hash+'?'+params.toString()
};


searchForm.addEventListener('submit', handleSearchSubmit);

const selectCharacters = document.getElementById('divCharacters');
const selectComics = document.getElementById('divComics');
const selectType = <HTMLSelectElement> document.getElementById('type');

// Funcion select ocultar/mostrar

const showSelect = (e) => {
    e.preventDefault();
    
    if (selectType.value === 'characters') {
        selectComics.classList.add('d-none');
        selectCharacters.classList.remove('d-none');
    } else {
        selectCharacters.classList.add('d-none');
        selectComics.classList.remove('d-none');
    }
}

selectType.addEventListener('change', showSelect);

// PAGINACION

const btnStart= document.getElementById('btn-start');
const btnEnd= document.getElementById('btn-end');
const btnNext= document.getElementById('btn-next');
const btnPrevius= document.getElementById('btn-previus');


// const handlePaginationClick = () => {
    const nextPage = () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if(!page){
        params.set('page', '2');
    }else{
        params.set('page', page + 1);
        }
}

const previusPage = () => {
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get('page'));
    if(page > 1){
        params.set('page', page - 1);
        }
}

const startPage = () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    params.set('page', '1');  
    // btnPrevius.disabled = true;
    // btnEnd.disabled = true;
}


btnNext.addEventListener('click', nextPage);
btnPrevius.addEventListener('click', previusPage);
btnStart.addEventListener('click', startPage);


// const search_select = () => {
//     fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then(rta => {
//         const comics = rta.data.results
//         generateCards(comics);
//     });
// }

// const search_select = () => {
//     fetch(`${base_url}${type}&apikey=${api_key}&hash=${HASH}&${search}&${order}`);
//     .then((response) => {
//         return response.json()
//     })
//     .then(rta => {
//         console.log(rta);
//         const comics = rta.data.results
//         generateCards(comics);
//     });
// } 

// selectType.addEventListener('change', search_select)





// const search_select = () => {
//     if (type === 'comics') {
//         fetch(`${base_url}/v1/public/comics?&apikey=${api_key}&hash=${HASH}`)
//         .then((response) => {
//             return response.json()
//         })
//         .then(rta => {
//             console.log(rta);
//             const comics = rta.data.results
//             generateCards(comics);
//         });
//     } else if (type === 'personajes') {
//         fetch(`${base_url}/v1/public/characters?&apikey=${api_key}&hash=${HASH}`)
//     .then((response) => {
//     return response.json()
//     })
//     .then(rta => {
//         const comics = rta.data.results
//         generateCards(comics);
//     })
//     }
// }

// selectType.addEventListener('change', search_select)
