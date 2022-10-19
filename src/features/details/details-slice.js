import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCountry = createAsyncThunk(
    'details/load-country',
    (name, {
        extra: {client, api}}) => {
        return client.get(api.searchByCountry(name))
    }
)

export const loadNeighbors = createAsyncThunk(
    'details/load-neighbors',
    (borders, {
        extra: {client, api}}) => {
        return client.get(api.filterByCode(borders))
    }
)

const initialState = {
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
            .addCase(loadCountry.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error;
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

// selectors
export const selectDetails = (state) => state.details;
export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectNeighbors = (state) => state.details.neighbors;
