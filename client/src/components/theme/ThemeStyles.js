import styled from 'styled-components';

export const ThemeContainerStyles = styled.div`
    width: ${props => props.sidebar ? '90%' : '75%'};
    margin: 1rem 0;
    display: flex;
    flex-direction: ${props => props.columnLayout ? 'row' : 'row'};
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width:37.5em) {
        width: 70%;
    }

`;

export const RadioInputStyles = styled.input`
    display: none;
`;

export const RadioLabelStyles = styled.label`
    outline: none;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RadioButtonStyles = styled.span`
    width: 3rem;
    height: 3rem;
    border: .5rem solid ${({ theme }) => theme.radioButtonColor};
    border-radius: 50%;
    position: relative;
    margin-right: 1rem;

    @media only screen and (max-width:37.5em) {
        top: -0.3rem;
    }

    &::after {
        content: "";
        display: inline-block;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${({ theme }) => theme.radioButtonInnerColor};
        opacity: 0;
        transition: opacity .2s;
    }

    ${RadioInputStyles}:checked + ${RadioLabelStyles} &::after { 
        opacity: 1;
      }

`;

export const ImgStyles = styled.img`
    width: 5rem;

    @media only screen and (max-width:37.5em) {
        width: 6.5rem;
    }
`;
