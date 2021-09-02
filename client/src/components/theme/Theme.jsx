import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/theme-actions';
import { ThemeContainerStyles, RadioLabelStyles, RadioInputStyles, RadioButtonStyles, ImgStyles } from './ThemeStyles';
import lightTheme from "../../assets/sun.svg";
import darkTheme from "../../assets/moon.svg";

const Theme = ({ sidebar }) => {

    const theme = useSelector(state => state.themeReducer.theme);

    const dispatch = useDispatch();

    const onThemeClick = event => {

        const selectedTheme = event.target.value;
        dispatch(setTheme(selectedTheme));
    }

    return (
        <ThemeContainerStyles sidebar={sidebar}>

            <RadioInputStyles type="radio" id="light-theme" name="theme" value="light"
                onChange={onThemeClick} checked={theme === 'light'} />

            <RadioLabelStyles htmlFor="light-theme">

                <RadioButtonStyles></RadioButtonStyles>

                <ImgStyles title="Light Theme" src={lightTheme} alt="Light Theme Logo" />
            </RadioLabelStyles>

            <RadioInputStyles type="radio" id="dark-theme" name="theme" value="dark"
                onChange={onThemeClick} checked={theme === 'dark'} />

            <RadioLabelStyles htmlFor="dark-theme">
                <RadioButtonStyles></RadioButtonStyles>

                <ImgStyles title="Dark Theme" src={darkTheme} alt="Dark Theme Logo" />
            </RadioLabelStyles>
        </ThemeContainerStyles>
    );

}

export default Theme;