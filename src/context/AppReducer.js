import { ADD_MOVIE_TO_WATCHLIST, REMOVE_MOVIE_FROM_WATCHED, 
    REMOVE_MOVIE_FROM_WATCHLIST, ADD_MOVIE_TO_WATCHED, 
 } from './Types';


const AppReducer = (state, action) => {

    switch(action.type) {
        case ADD_MOVIE_TO_WATCHLIST: 

          return {
              ...state,
              watchlist: [action.payload, ...state.watchlist]
          }

        case REMOVE_MOVIE_FROM_WATCHLIST: 
          return {
              ...state,
              watchlist: state.watchlist.filter(
                  (movie) => movie.id !== action.payload
              )
          }
        case ADD_MOVIE_TO_WATCHED:
            return {
                ...state, 
                watched: [action.payload, ...state.watched]
            }
        case REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter (
                    (movie) => movie.id !== action.payload.id
                )
            }
            

        default: 
        return state;
    }
}

export default AppReducer;