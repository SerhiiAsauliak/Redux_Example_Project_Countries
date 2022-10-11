export const SET_COUTRY = '@@details/SET_COUNTRY';
export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const RESET_DETAILS = '@@details/RESET_COUNTRY';
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS';

export const setCountry = (country) => ({
   type: SET_COUTRY,
   payload: country
})
export const setLoadig = () => ({
   type: SET_LOADING,
})
export const resetDetails = () => ({
   type: RESET_DETAILS,
})
export const setError = (err) => ({
   type: SET_ERROR,
   payload: err
})

export const setNeighbors = (countries) => ({
   type: SET_NEIGHBORS,
   payload: countries
})

export const loadCountry = (name) => (dispatch, _, {client, api}) => {
   dispatch(setLoadig());
   client.get(api.searchByCountry(name))
      .then(({data}) => dispatch(setCountry(data[0])))
      .catch(err => dispatch(setError(err.message)));
}

export const loadNeighbors = (borders) => (dispatch, _, {client, api}) => {
   client.get(api.filterByCode(borders))
      .then(({data}) => dispatch(setNeighbors(data.map(counties => counties.name))))
      .catch(console.error);
}