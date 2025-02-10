import { combineReducers } from 'redux';
import { themeReducer } from '../store/theme/theme-reducer';
import { countriesReducer } from '../store/countries/countries-reducer';
import { controlsReducer } from './controls/controls-reducer';

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
});
