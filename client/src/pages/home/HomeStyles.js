import styled from 'styled-components';

export const HomeStyles = styled.div`
    display: flex;

    @media only screen and (max-width: 45em) {
        flex-direction: column;
    }
`;

export const MainStyles = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    width: 80%;
    background: ${({ theme }) => theme.background};

    @media only screen and (max-width: 45em) {
        max-height: 70vh;
        width: 100%;
    }
`;