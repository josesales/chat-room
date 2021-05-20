import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/theme-actions';
import { ThemeContainerStyles, RadioLabelStyles, RadioInputStyles, RadioButtonStyles } from './ThemeStyles';

const Theme = ({ columnLayout }) => {

    const theme = useSelector(state => state.themeReducer.theme);

    const dispatch = useDispatch();

    const onThemeClick = event => {

        const selectedTheme = event.target.value;
        dispatch(setTheme(selectedTheme));
    }

    return (
        <ThemeContainerStyles columnLayout={columnLayout}>

            <RadioInputStyles type="radio" id="light-theme" name="theme" value="light"
                onChange={onThemeClick} checked={theme == 'light'} />

            <RadioLabelStyles htmlFor="light-theme">
                <RadioButtonStyles></RadioButtonStyles>
                Light Mode
            </RadioLabelStyles>

            <RadioInputStyles type="radio" id="dark-theme" name="theme" value="dark"
                onChange={onThemeClick} checked={theme == 'dark'} />

            <RadioLabelStyles htmlFor="dark-theme">
                <RadioButtonStyles></RadioButtonStyles>
                Dark Mode
            </RadioLabelStyles>
        </ThemeContainerStyles>
    );

}

export default Theme;