const API_KEY = "U96487nXkT9zAKpbcEkgGabVX3h4Yst9";
const GIPHY_API = "http://api.giphy.com/v1/gifs/";

export const TRENDING_URL = (offset: number): string =>
  `${GIPHY_API}trending?api_key=${API_KEY}&limit=10&offset=${offset}`;

export const SEARCH_URL = (searchTerm: string, offset: number): string =>
  `${GIPHY_API}search?api_key=${API_KEY}&q=${searchTerm}&limit=10&offset=${offset}`;
