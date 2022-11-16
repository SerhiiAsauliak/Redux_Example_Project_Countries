import { useSelector } from 'react-redux';
import { SingleValue } from 'react-select';
import { useAppDispatch } from 'store';
import { Regions } from 'types';
import { selectRegion } from './controls-selectors';
import { setRegion } from './controls-slice';
import { CountryOptions } from './CustomSelect';

type onSelect = (reg: SingleValue<CountryOptions>) => void;

export const useRegion = (): [Regions | '', onSelect]  => {
    const dispath = useAppDispatch();
    const region = useSelector(selectRegion);
    const handleSelect: onSelect = (reg) => {
        if(reg) {
            dispath(setRegion(reg?.value || ''))
        } else {
            dispath(setRegion(''));
        }
    }

    return [region, handleSelect];
}