// type Comic 

type Comic = {
    id ?: number,
	digitalId ?: number,
	title ?:string
	issueNumber ?: number,
	variantDescription ?: string,
	description ?: string,
	modified ?: Date,
	isbn ?: string,
	upc ?: string,
	ean ?: string,
	issn ?: string,
	format ?: string,
	pageCount ?: number,
	textObjects ?: TextObject[],
	resourceURI ?: string,
	urls ?: Url[],
	series ?: SeriesSummary,
	variants ?: ComicSummary[],
	collections ?: ComicSummary[],
	collectedIssues ?: ComicSummary[],
	dates ?: ComicDate[],
	prices ?: ComicPrice[],
	thumbnail ?: Image,
	images ?: Image[],
	creators ?: CreatorList,
	characters ?: CharacterList,
	stories ?: StoryList,
	events ?: EventList,
}

type TextObject = { 
	type ?: string,
	language ?: string,
	text ?: string,
}

type Url = {
	type ?: string,
	url ?: string,
}

type SeriesSummary = {
	resourceURI ?: string,
	name ?: string,
}

type ComicSummary = {
	resourceURI ?: string,
	name ?: string,
}

type ComicDate = {
	type ?: string,
	date ?: Date,
}

type ComicPrice = {
	type ?: string,
	price ?: number,
}

type Image = {
	path ?: string,
	extension ?: string,
}

type CreatorList = {
	available ?: number,
	returned ?: number,
	collectionURI ?: string,
	items ?: CreatorSummary[],
}

type CreatorSummary = {
	resourceURI ?: string,
	name ?: string,
	role ?: string,
}

type CharacterList = {
	available ?: number,
	returned ?: number,
	collectionURI ?: string,
	items ?: CharacterSummary[],
}

type CharacterSummary = {
	resourceURI ?: string,
	name ?: string,
	role ?: string,
}

type StoryList = {
	available ?: number,
	returned ?: number,
	collectionURI ?: string,
	items ?: StorySummary[],
}

type StorySummary = {
	resourceURI ?: string,
	name ?: string,
	type ?: string,
}

type EventList = {
	available ?: number,
	returned ?: number,
	collectionURI  ?: string,
	items ?:EventSummary [],
}

type EventSummary = {
	resourceURI ?: string,
	name ?: string,
}

// types character

type Character = {
    id ?: number;
	name ?: string,
	description ?: string,
	modified ?: Date,
	resourceURI ?: string,
	urls ?: Url[],
	thumbnail ?: Image,
	comics ?: ComicList,
	stories ?: StoryList,
	events ?: EventList,
	series ?: SeriesList,
}

type ComicList = {
	available ?: number,
	returned ?: number,
	collectionURI ?: string,
	items ?: ComicSummary[],
}

type SeriesList = {
	available ?: number,
	returned ?: number,
	collectionURI ?: string,
	items ?: SeriesSummary[],
}



// const base_url: string = 'https://gateway.marvel.com';
// const api_key: string = '84d0b9f6b697a08a98c0419cce4cfb38';
// const HASH: string = '4a467ffce992bde84ba21eba59dd7d4a';

// fetch(`${base_url}/v1/public/comics?apikey=${api_key}&hash=${HASH}`)
//     .then((response) =>{
//         return response.json();
//     }).then((rta)=>{
//         const comics = rta.results;
//         const table = document.getElementById('img-container');
//         const tbody = table.getElementsByTagName('tbody')[0]

//         comics.forEach(results => {
//             const tr= document.createElement('tr');
//             const td= document.createElement('td');
//             const text= document.createTextNode('results.title');
//             tr.appendChild(td);
//             td.appendChild(text);
//             tbody.appendChild(tr);

            
//         });
//     })