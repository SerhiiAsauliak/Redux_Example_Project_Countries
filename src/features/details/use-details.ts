import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectDetails} from './details-selectors';
import { loadCountry, resetDetails } from './details-slice';
import { useAppDispatch } from 'store';


export const useDetails = (name: string) => {
    const dispatch = useAppDispatch();
    const details = useSelector(selectDetails);
    useEffect(() => {
      dispatch(loadCountry(name));
      return ()=> {dispatch(resetDetails())}
    }, [name, dispatch]);

    return details;
}