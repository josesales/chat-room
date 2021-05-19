import { ThemeActionTypes } from './theme-types';

export const setTheme = theme => {

    return { type: ThemeActionTypes.SET_THEME, payload: theme };
};