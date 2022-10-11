import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/details-selectors';
import { useEffect } from 'react';
import { setCountry, resetDetails } from '../store/details/details-actions';
import { loadCountry } from './../store/details/details-actions';


export const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const navigate = useNavigate();
  const {status, currentCountry, error} = useSelector(selectDetails);
  useEffect(() => {
    dispatch(setCountry);
    dispatch(loadCountry(name));
    return ()=> {dispatch(resetDetails())}
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
