import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from './config';
import {themeReducer} from './features/theme/theme-slice';
import { controlsReducer } from './features/controls/controls-slice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,     
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