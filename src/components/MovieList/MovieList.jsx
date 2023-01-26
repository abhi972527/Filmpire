import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '..';

const MovieList = ({ movies }) => {
    // console.log('MovieList: ', movies?.total_pages);
    const classes = useStyles();
    return (
        /* eslint-disable */
        <Grid container className={classes.moviesContainer}>
            {movies.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid>
    );
};

export default MovieList;
