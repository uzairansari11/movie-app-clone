import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as moviesReducer } from "./movies/movies.reducer"



const rootReducer = combineReducers({ moviesReducer })

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

