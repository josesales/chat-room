import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import InputMessage from '../../components/input-message/InputMessage';
import Message from '../../components/message/Message';
import Sidebar from '../../components/sidebar/Sidebar';
import { WebSocketContext } from '../../context/WebSocketContext';
import './Home.scss';

const Home = () => {

    const context = useContext(WebSocketContext);
    const user = useSelector(state => state.userReducer.user);

    useEffect(() => {

        return () => {
            //user should be null during the when component is unmounted
            context.addUser(null);
        }
    }, [context]);

    if (!user) {
        return <Redirect to="/" />
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