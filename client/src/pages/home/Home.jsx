import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import InputMessage from '../../components/input-message/InputMessage';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';
import Sidebar from '../../components/sidebar/Sidebar';
import { HomeStyles, MainStyles } from './HomeStyles';

const Home = () => {

    const user = useSelector(state => state.userReducer.user);
    const room = useSelector(state => state.roomReducer.room);

    if (!user) {
        return <Redirect to="/login" />
    }

    return (
        <React.Fragment>
            {
                !room ? <Loader /> :

                    <HomeStyles>

                        <Sidebar />

                        <MainStyles>

                            <Message />
                            <InputMessage />
                        </MainStyles>
                    </HomeStyles>
            }
        </React.Fragment>
    );

}

export default Home;