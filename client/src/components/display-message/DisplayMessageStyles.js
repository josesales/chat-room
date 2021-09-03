import styled from 'styled-components';

export const DisplayMessageStyles = styled.div`
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
`;

export const DisplayMessageErrorStyles = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    padding: .5rem .5rem;
    background-color: #d42424;
    color: ${({ theme }) => theme.textColor};
`;

export const DisplayMessageAlertStyles = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    padding: .5rem .5rem;
    background-color: #f59e0b;
    color: ${({ theme }) => theme.textColor};
`;

export const DisplayMessageSuccessStyles = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    padding: .5rem .5rem;
    background-color: #1a964a;
    color: ${({ theme }) => theme.textColor};
`;

export const DisplayMessageTypeStyles = styled.h2`
    text-transform: capitalize;
    margin-right: 1rem;
`;