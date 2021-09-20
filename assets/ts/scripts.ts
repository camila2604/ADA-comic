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