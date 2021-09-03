import styled from 'styled-components';

export const MessageContainerStyles = styled.div`
    flex-grow: 1;
    padding: 1.2rem 2.4rem 0 2.4rem;
    overflow-y: scroll;
    color: ${({ theme }) => theme.textColor};

    /* width */
    &::-webkit-scrollbar {
        width: 1.5rem;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ${({ theme }) => theme.scrollColor};
        border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.scrollColor};
        border-radius: 10px;
    }
`;

export const MessageStyles = styled.div`
    font-size: 3rem;
    margin-bottom: 3rem;
    background-image: ${({ theme }) => theme.themeBackground};
    padding: 2rem 3rem;
    border-radius: 2rem;

    @media only screen and (max-width: 45em) {
        font-size: 2.5rem;
    }
`;

export const MessageUserStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 600;
    text-transform: capitalize;
`;

export const UserNameStyles = styled.p`
    margin-right: 10rem;
`;

export const DateStyles = styled.p`
    margin-left: auto;
`;

export const TextStyles = styled.p`
    margin-top: 1rem;
`;