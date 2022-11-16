import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from './config';
import {themeReducer} from './features/theme/theme-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { countryReducer } from "./features/countries/country-slice";
import { useDispatch } from "react-redux";
import { detailsReducer } from "features/details/details-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countryReducer,   
        details: detailsReducer,  
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            },
        },
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;