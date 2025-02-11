import { combineReducers } from 'redux';
import { themeReducer } from '../store/theme/theme-reducer';
import { countriesReducer } from '../store/countries/countries-reducer';
import { controlsReducer } from './controls/controls-reducer';
import { detailsReducer } from './details/details-reducer';

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
});
