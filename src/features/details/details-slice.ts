import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, Extra, Status } from 'types';

export const loadCountry = createAsyncThunk<
    {data: Country[]},
    string,
    {extra: Extra}
>(
    'details/load-country',
    (name, {
        extra: {client, api}}) => {
        return client.get(api.searchByCountry(name))
    }
)

export const loadNeighbors = createAsyncThunk<
{data: Country[]},
string[],
{extra: Extra}
>(
    'details/load-neighbors',
    (borders, {
        extra: {client, api}}) => {
        return client.get(api.filterByCode(borders))
    }
)

type DetailsSlice = {
    status: Status,
    currentCountry: Country | null,
    neighbors: string[],
    error: string | null
}

const initialState: DetailsSlice = {
    status: 'idle',
    currentCountry: null,
    neighbors: [],
    error: null
}

export const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        resetDetails: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountry.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountry.rejected, (state) => {
                state.status = 'rejected';
                state.error = 'Cannot load data';
            })
            .addCase(loadCountry.fulfilled, (state, action) => {
                state.status = 'received';
                state.currentCountry = action.payload.data[0];
            })
            .addCase(loadNeighbors.fulfilled, (state, action) => {
                state.neighbors = action.payload.data.map(counties => counties.name);
            })
    }
})
export const detailsReducer = detailsSlice.reducer;
export const {resetDetails} = detailsSlice.actions;
