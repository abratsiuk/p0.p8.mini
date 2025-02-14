import {
    SET_LOADING,
    SET_ERROR,
    SET_COUNTRY,
    CLEAR_DETAILS,
} from './details-actions';

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
};
export const detailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                currentCountry: null,
                status: 'loading',
                error: null,
            };
        case SET_ERROR:
            return {
                ...state,
                currentCountry: null,
                status: 'rejected',
                error: payload,
            };
        case SET_COUNTRY:
            return {
                ...state,
                currentCountry: payload,
                status: 'received',
                error: null,
            };
        case CLEAR_DETAILS:
            return initialState;
        default:
            return state;
    }
};
