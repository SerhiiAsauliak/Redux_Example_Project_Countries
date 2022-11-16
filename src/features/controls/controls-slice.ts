import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Regions } from 'types';

type ControlSlice = {
    search: string,
    region: Regions | '',
}

const initialState: ControlSlice = {
    search: '',
    region: '',
 }

const controlsSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        }, 
        setRegion: (state, action: PayloadAction<Regions| ''>) => {
            state.region = action.payload;
        },
        resetControls: () => initialState,
    },
});

export const {setSearch, setRegion, resetControls} = controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;

