import {SET_COUTRIES, SET_LOADING, SET_ERROR} from './countries-actions';

const initialState = {
   status: 'idle',
   list: [],
   error: null
}

export const countiesReducer = (state = initialState, {type, payload}) => {
   switch (type) {
      case SET_COUTRIES:
         return {
            ...state,
            status: 'received',
            list: payload
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
      default:
         return state;
   }
}