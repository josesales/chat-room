import styled from 'styled-components';

export const LoginContainerStyles = styled.div`
    width: 100vw;
    height: 100vh;   
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;

export const CenterStyles = styled.div`
    box-shadow: 0px 0px 2rem 1px #0e0f11;
    background-image: ${({ theme }) => theme.loginCenterContainer};
    padding: 15rem;
    width: 65rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 45em) {
        font-size: 2rem;
        padding: 8rem;
        width: 50rem;
    }
`;

export const LogoStyles = styled.img`
    width: 50%;

    @media only screen and (max-width: 45em) {
        width: 40%;
    }
`;

export const InputStyles = styled.input`
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 80%;
    height: 4.5rem;
    font-size: 2.5rem;

    border: 1px solid #eeeeee;
    padding: 1rem;
    outline: none;
    border-radius: 2rem;
    transition: all .3s;

    &:focus {
        width: 100%;
    }
`;

export const SubmitStyles = styled.input`
    width: 30%;
    margin-top: 1rem;
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
`;
