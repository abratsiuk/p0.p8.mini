import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectControls } from '../store/controls/controls-selectors';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import {
    selectCountriesInfo,
    selectVisibleCountries,
} from '../store/countries/countries-selectors';
import { loadCountries } from '../store/countries/countries-actions';

export const HomePage = () => {
    const navigate = useNavigate();

    const { search, region } = useSelector(selectControls);
    const countries = useSelector((state) =>
        selectVisibleCountries(state, { search, region })
    );
    const { status, error, qty } = useSelector(selectCountriesInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (qty === 0) {
            dispatch(loadCountries());
        }
    }, [qty, dispatch]);

    return (
        <>
            <Controls />

            {error && <h2>{error}</h2>}
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'received' && (
                <List>
                    {countries.map((c) => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        };

                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    );
};
