import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import InputMessage from '../../components/input-message/InputMessage';
import Message from '../../components/message/Message';
import Sidebar from '../../components/sidebar/Sidebar';
import { HomeStyles, MainStyles } from './HomeStyles';
const Home = () => {

    const user = useSelector(state => state.userReducer.user);

    if (!user) {
        return <Redirect to="/login" />
    }

    return (
        <HomeStyles>

            <Sidebar />

            <MainStyles>

                <Message />
                <InputMessage />
            </MainStyles>
        </HomeStyles>
    );

}

export default Home;