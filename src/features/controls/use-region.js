import { useSelector, useDispatch } from 'react-redux';
import {selectRegion} from './controls-slice';
import { setRegion } from './controls-slice';

export const useRegion = () => {
    const dispath = useDispatch();
    const region = useSelector(selectRegion);
    const handleSelect = (reg) => {
        dispath(setRegion(reg?.value || ''))
    }

    return [region, handleSelect];
}