type Comic = {
        id: number,
        digitalId: number,
        title: string,
        issueNumber: number,
        variantDescription?: string,
        description?: string,
        modified?: Date,
        isbn?: string, 
        upc?: string,
        diamondCode?: string,
        ean?: string,
        issn?: string,
        format?: string, 
        pageCount?: number,
        textObjects?: string[],
        resourceURI?: string,
        urls?: string[],
        series?: string,
        variants: string[],
        collections?: string[],
        collectedIssues?: string[],
        dates?: string[],
        prices?: string[],
        thumbnail?: string[],
        images?: string[],
        creators?: string,
        characters?: string,
        stories?: string,
        events?: string
}

type Character = {
  id: string,
  name: string,
  description: string,
  modified?: Date,
  resourceURI?: string,
  urls: string[],
  thumbnail: string[],
  comics: string,
  stories: string,
  events: string,
  series: string
}



const base_url: string = 'https://gateway.marvel.com';
const api_key: string = '84d0b9f6b697a08a98c0419cce4cfb38';
const HASH: string = '4a467ffce992bde84ba21eba59dd7d4a';

fetch(`${base_url}/v1/public/comics?apikey=${api_key}&hash=${HASH}`)
    .then((response) =>{
        return response.json();
    }).then((rta)=>{
        const comics = rta.results;
        const table = document.getElementById('img-container');
        const tbody = table.getElementsByTagName('tbody')[0]

        comics.forEach(results => {
            const tr= document.createElement('tr');
            const td= document.createElement('td');
            const text= document.createTextNode('results.title');
            tr.appendChild(td);
            td.appendChild(text);
            tbody.appendChild(tr);

            
        });
    })