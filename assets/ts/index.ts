const base_url: string = 'https://gateway.marvel.com';
const api_key: string = '84d0b9f6b697a08a98c0419cce4cfb38';
const HASH: string = '4a467ffce992bde84ba21eba59dd7d4a';

fetch(`${base_url}/v1/public/comics?apikey=${api_key}&hash=${HASH}`)
    .then((response) =>{
        return response.json();
    }).then(({data})=>{
        console.log(data);
        const comics: Comic[] = data.results;

        
            comics.forEach(comic => {
                const divComics = document.getElementById('container-comics');
                const divCard = document.createElement('div');
                divCard.classList.add('card');
                divCard.classList.add('col-10');
                divCard.classList.add('m-3')
                divCard.style.width = '20rem';

                const divTitle = document.createElement('div');
                divTitle.classList.add('card-body');
                const title = document.createElement('h5');
                title.innerText = comic.title;

                const imgComic = document.createElement('img');
                imgComic.classList.add('car-img-top');
                imgComic.src = comic.thumbnail.path + '.' + comic.thumbnail.extension;
                
                divCard.appendChild(divTitle);
                divTitle.appendChild(title);
                divCard.appendChild(imgComic);
                divComics.appendChild(divCard);
            
            });
    


    })