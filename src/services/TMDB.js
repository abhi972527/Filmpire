import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        // Get Movies by [Genres]
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
        }),
        // Get Movies by [Type]
        getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page }) => {
                console.log('page: ', page);
                console.log('genreIdOrCategoryName: ', genreIdOrCategoryName);
                // Get movies by category
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                }
                // Get movies by genres
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
                }
                // Get popular movies bydefault
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
        }),
    }),
});

export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;
