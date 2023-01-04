export const API_KEY = "3f33d70920c092c34def1d149e11c221";

// base url to get movie data
export const baseUrl = "https://api.themoviedb.org/3";
// base url for get images 
export const IMG_ORGIN_BANNER = `https://image.tmdb.org/t/p/original`;
export const IMG_ORGIN_THUMP = `https://image.tmdb.org/t/p/w300`;

// to get movie trailer id youtube video id dummy sample below 
export const YT_VIDEO_API = `/movie/<video id>/videos?api_key=${API_KEY}&language=en-US`;
// to get trending movies
export const TRENDING_ROW_URL = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
// to get movie data
export const GENRE_ROW_URL = `/discover/tv?api_key=${API_KEY}&with_genres=`;
// to get images
export const IMG_URL = `/trending/all/week?api_key=${API_KEY}&language=en-US`;

// to get genre which is available
export const genre = `/genre/movie/list?api_key=${API_KEY}`;
