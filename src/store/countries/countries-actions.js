export const SET_COUTRIES = '@@country/SET_COUNTRIES';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/SET_ERROR';

export const setCountries = (country) => ({
   type: SET_COUTRIES,
   payload: country
})
export const setLoadig = () => ({
   type: SET_LOADING,
})
export const setError = (err) => ({
   type: SET_ERROR,
   payload: err
})

export const loadCountries = () => (dispatch, _, {client, api}) => {
   dispatch(setLoadig());
   client.get(api.ALL_COUNTRIES)
      .then(({data}) => dispatch(setCountries(data)))
      .catch(err => dispatch(setError(err.message)));
}