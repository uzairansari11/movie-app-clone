import { getMoviesDataFromApi } from "./movies.api";
import * as types from "./movies.types";

export const getMovieLoading = () => {
    return {
        type: types.GET_MOVIES_LOADING,
    };
};

export const getMovieError = () => {
    return {
        type: types.GET_MOVIES_ERROR,
    };
};

export const getMovieData = (payload) => {
    return {
        type: types.GET_MOVIES_DATA,
        payload,
    };
};

export const getingMovieDatathroughApifunction = () => async (dispatch) => {
    dispatch(getMovieLoading());

    try {
        const data = await getMoviesDataFromApi();
        dispatch(getMovieData(data));
    } catch (error) {
        dispatch(getMovieError());
    }
};
