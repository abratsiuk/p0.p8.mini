import { FILTER } from './filters_const';

export const filters = (state = 'all', action) => {
    switch (action.type) {
        case FILTER:
            return action.filter;
        default:
            return state;
    }
};
