const base_url: string = 'https://gateway.marvel.com';
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

fetch(`${base_url}/v1/public/comics?apikey=${api_key}&hash=${HASH}`)
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

    const selectType= <HTMLInputElement>document.getElementById('select_type');



const search_select = () => {
    const type = selectType.value;
    console.log(type);
    if (type === 'comics') {
        fetch(`${base_url}/v1/public/comics?&apikey=${api_key}&hash=${HASH}`)
        .then((response) => {
            return response.json()
        })
        .then(rta => {
            console.log(rta);
            const comics = rta.data.results
            generateCards(comics);
        });
    } else if (type === 'personajes') {
        fetch(`${base_url}/v1/public/characters?&apikey=${api_key}&hash=${HASH}`)
    .then((response) => {
    return response.json()
    })
    .then(rta => {
        const comics = rta.data.results
        generateCards(comics);
    })
    }
}

selectType.addEventListener('change', search_select)
