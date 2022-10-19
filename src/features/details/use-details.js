import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectDetails } from './details-slice';
import { resetDetails } from './details-slice';
import { loadCountry } from './details-slice';

export const useDetails = (name) => {
    const dispatch = useDispatch();
    const details = useSelector(selectDetails);
    useEffect(() => {
      dispatch(loadCountry(name));
      return ()=> {dispatch(resetDetails())}
    }, [name, dispatch]);

    return details;
}