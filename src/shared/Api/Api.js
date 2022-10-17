import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '92d5bce9977ce0969f787a5dd220aae9';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const searchMovies = async (stringToSearch) => {
    const query = `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
    const { data: movies } = await axios.get(query);
    return movies;
};

export const getMovieDetails = async (movieId) => {
    const query = `movie/${movieId}$?api_key=${API_KEY}&language=en-US`;
    const { data: movie } = await axios.get(query);
    return movie;
};

export const getTrendingMovies = async () => {
    const query = `trending/movie/day?api_key=${API_KEY}`;
    const { data: movies } = await axios.get(query);
    return movies;
};

export const getMovieCast = async (movieId) => {
    const query = `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(query);
    return data;
};

export const getReviews = async (movieId) => {
    const query = `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(query);
    return data;
};