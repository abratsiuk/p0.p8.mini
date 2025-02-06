import { combineReducers } from 'redux';
import { themeReducer } from '../store/theme/theme-reducer';
export const rootReducer = combineReducers({
    theme: themeReducer,
});
