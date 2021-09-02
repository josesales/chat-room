import styled from 'styled-components';

export const InputMessageStyles = styled.div`
    display: flex;
    flex-shrink: 0;
    padding: 2.5rem;
    width: 100%;
    background-image: ${({ theme }) => theme.themeBackground};

    @media only screen and (max-width:45em) {
        justify-content: center;
        margin: 0 0;
        border-radius: 0;
        padding: 1rem 2.5rem;
    }
`;

export const TextAreaContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
`;

export const FormStyles = styled.form`
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-right: 2rem;

    @media only screen and (max-width:45em) {
        align-items: center;
        flex-direction: column;
    }
`;

export const TextAreaStyles = styled.textarea`
    color: #eeeeee;
    font-size: 2.5rem;
    width: 100%;
    padding: 2rem;
    margin: 0 1.6rem 3rem 0;
    border-radius: 2rem;
    outline: none;
    resize: none;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.background};
    
    @media only screen and (max-width:45em) {
        margin: 0;
    }
`;

export const ButtonStyles = styled.button`
    width: 10rem;
    margin-bottom: 3rem;
    padding: 1rem;
    font-size: 3rem;
    outline: none;
    border-radius: 2rem;
    cursor: pointer;
    border: none;
    box-shadow: 0px 0px 1rem 1px #0e0f11;
    font-family: 'Alegreya', serif;
    font-weight: 700;
    background: ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.color};

    &:hover {
        background: ${({ theme }) => theme.buttonColorHover};
        color: ${({ theme }) => theme.colorHover};
    }
    
    @media only screen and (max-width:45em) {
        height: 6rem;
        width: 11rem;
        margin-top: 4rem;
        margin-bottom: 2rem;
    } 
`;

export const InfoStyles = styled.p`
    position: absolute;
    bottom: -.5rem;
    left: 0;
    font-size: 2rem;
    color: ${({ theme }) => theme.textColor};

    @media only screen and (max-width:45em) {
        left: .5rem;
        bottom: -2.5rem;
    }
`;