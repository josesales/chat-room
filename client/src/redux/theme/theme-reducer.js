import { ThemeActionTypes } from './theme-types';

const INITIAL_STATE = {
    theme: 'light',
}

const themeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ThemeActionTypes.SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };

        default:
            return state;
    }
}

export default themeReducer;