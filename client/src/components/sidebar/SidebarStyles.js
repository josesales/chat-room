import styled from 'styled-components';

export const SidebarStyles = styled.div`
    height: 100vh;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.background};
    border-right: 1px solid grey;
    width: 40rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width:45em) {
        width: 100%;
        height: 30%;
        border-right: none;
        border-bottom: 1px solid grey;
    }

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

export const RoomStyles = styled.div`
    font-weight: 400;
    font-size: 3rem;
    text-transform: capitalize;
    padding: 2rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: ${({ theme }) => theme.themeBackground};
    color: ${({ theme }) => theme.color};
    
    @media only screen and (max-width:45em) {
        padding: 1rem; 
    }
`;

export const ButtonStyles = styled.button`
    width: 10rem;
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

export const UserContainerStyles = styled.div`
    height: 100%;
    text-transform: capitalize;
`;

export const UserNameStyles = styled.h3`
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 4px;
    padding: 1.2rem 2.4rem 0 2.4rem;
`;

export const UserListStyles = styled.ul`
    list-style-type: none;
    font-size: 2.5rem;
    font-weight: 300;
    padding: 1.2rem 2.4rem 0 2.4rem;
    overflow-x: auto;

    @media only screen and (max-width:45em) {
        display: flex;
        flex-wrap: wrap;
        padding: 0 2.4rem;

        li {
            &:not(:last-child) {
                margin-bottom: 0;
                margin-right: 5rem;
            }
        }
    }

    li {
        margin-bottom: 3rem;
    }

`;