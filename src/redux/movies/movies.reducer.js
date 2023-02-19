import * as types from "./movies.types"


const initialState = {
    loading: false,
    error: false,
    movies: []
}
export const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {

        case types.GET_MOVIES_LOADING:
            return {
                ...state, loading: true
            }


        case types.GET_MOVIES_DATA:
            return {
                ...state,loading:false, movies: payload
            }

        case types.GET_MOVIES_ERROR:
            return {
                ...state, error: true
            }


        default: return state

    }

}