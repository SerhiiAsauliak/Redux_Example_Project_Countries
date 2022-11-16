import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectControls } from '../controls/controls-slice';
import { selectCountriesInfo,
         selectVisibleCountries } from './countries-selectors';
import { RootState, useAppDispatch } from 'store';
import { loadCountries } from './country-slice';
import { Country } from 'types';


export const useCountries = (): [
    Country[],
    ReturnType<typeof selectCountriesInfo>
    ] => {
    const dispatch = useAppDispatch();
    const { search, region } = useSelector(selectControls);
    const countries = useSelector((state: RootState) => selectVisibleCountries(state, {search, region}));
    const { status, error, qty } = useSelector(selectCountriesInfo);
    useEffect(() => {
        if (!qty) {
            dispatch(loadCountries());
        }
    }, [qty, dispatch])

    return [countries, {status, error, qty}];
}