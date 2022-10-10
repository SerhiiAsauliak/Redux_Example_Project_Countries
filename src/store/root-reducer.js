import { combineReducers } from "redux";
import {themeReducer} from './theme/theme-reducer';
import {countiesReducer} from './countries/countries-reducer';
import { controlsReducer } from './controls/controls-reducer';

export const rootReducer = combineReducers({
   theme: themeReducer,
   countries: countiesReducer,
   controls: controlsReducer,
})