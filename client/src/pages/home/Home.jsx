import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import InputMessage from '../../components/input-message/InputMessage';
import Message from '../../components/message/Message';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.scss';

const Home = () => {

    const user = useSelector(state => state.userReducer.user);

    if (!user) {
        return <Redirect to="/login" />
    }

    return (
        <div className="home">

            <Sidebar />

            <div className="home__main">

                <Message />
                <InputMessage />
            </div>
        </div>
    );

}

export default Home;