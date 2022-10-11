import {SET_COUTRY, SET_LOADING, SET_ERROR, RESET_DETAILS} from './details-actions';

const initialState = {
   status: 'idle',
   currentCountry: null,
   error: null
}

export const detailsReducer = (state = initialState, {type, payload}) => {
   switch (type) {
      case SET_COUTRY:
         return {
            ...state,
            status: 'received',
            currentCountry: payload
         };
      case SET_LOADING:
         return {
            ...state,
            status: 'loading',
            error: null
         };
      case SET_ERROR:
         return {
            ...state,
            status: 'rejected',
            error: payload
         };
      case RESET_DETAILS:
         return initialState;
      default:
         return state;
   }
}