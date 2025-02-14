import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/details-selectors';
import {
    loadCountryByName,
    clearDetails,
} from '../store/details/details-actions';

export const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const { currentCountry, error, status } = useSelector(selectDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCountryByName(name));

        return () => {
            dispatch(clearDetails());
        };
    }, [name, dispatch]);

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {error && <h2>{error}</h2>}
            {status === 'loading' && <h2>Country is loading...</h2>}
            {currentCountry && (
                <Info
                    push={navigate}
                    {...currentCountry}
                />
            )}
        </div>
    );
};
