const API_KEY = "3f33d70920c092c34def1d149e11c221";

export const baseUrl = "https://api.themoviedb.org/3";
export const IMG_ORGIN = `https://image.tmdb.org/t/p/original`;

export const genreRowUrl = `/discover/tv?api_key=${API_KEY}&with_networks=`;
export const IMG_URL = `/trending/all/week?api_key=${API_KEY}&language=en-US`;

export const genre = `/genre/movie/list?api_key=${API_KEY}`;

export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const crime = `/discover/movie?api_key=${API_KEY}&with_genres=80`;
export const fantasy = `/discover/movie?api_key=${API_KEY}&with_genres=14`;
export const sci_fi = `/discover/movie?api_key=${API_KEY}&with_genres=878`;
export const adventure = `/discover/movie?api_key=${API_KEY}&with_genres=12`;
export const animation = `/discover/movie?api_key=${API_KEY}&with_genres=16`;
export const mystery = `/discover/movie?api_key=${API_KEY}&with_genres=9648`;
export const war = `/discover/movie?api_key=${API_KEY}&with_genres=10752`;