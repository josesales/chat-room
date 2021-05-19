import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/theme-actions';
import './Theme.scss';

const Theme = () => {

    const theme = useSelector(state => state.themeReducer.theme);

    const dispatch = useDispatch();

    const onThemeClick = event => {

        const selectedTheme = event.target.value;
        dispatch(setTheme(selectedTheme));
    }

    return (
        <div className="theme-container">

            <input type="radio" id="light-theme" name="theme" value="light" className="theme-container__radio-input"
                onChange={onThemeClick} checked={theme == 'light'} />

            <label htmlFor="light-theme" className="theme-container__radio-label">
                <span className="theme-container__radio-button"></span>
                Light Mode
            </label>

            <input type="radio" id="dark-theme" name="theme" value="dark" className="theme-container__radio-input"
                onChange={onThemeClick} checked={theme == 'dark'} />

            <label htmlFor="dark-theme" className="theme-container__radio-label">
                <span className="theme-container__radio-button"></span>
                Dark Mode
            </label>
        </div>
    );

}

export default Theme;