import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import logo from "../../assets/logo-200x200.png";
import './Login.scss';
import { WebSocketContext } from '../../context/WebSocketContext';
import { useSelector } from 'react-redux';

const Login = () => {

    const [userFields, setUserFields] = useState({ name: '', room: '' });

    const context = useContext(WebSocketContext);
    const user = useSelector(state => state.userReducer.user);

    const onUserFieldsChange = event => {
        const { value, name } = event.target;

        setUserFields({ ...userFields, [name]: value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        if (!userFields.name || !userFields.room) {
            alert('User Name and Room are required!');
            return;
        }

        context.addUser(userFields);
    }

    useEffect(() => {
        //user should be null during the first time the component renders
        context.addUser(null);
    }, [context]);

    return (
        <React.Fragment>
            {
                user ? <Redirect to="/home" /> :

                    <div className="login-container">
                        <form onSubmit={onSubmitHandler}>
                            <div className="login-container__center">

                                <img title="Home" src={logo} alt="Food Helper Logo"
                                    className="login-container__center--logo" />

                                <h1>Chat Room</h1>

                                <label>Name</label>
                                <input type="text" className="login-container__input" placeholder="Name" autoComplete="off"
                                    value={userFields.name} name="name" onChange={onUserFieldsChange} />

                                <label>Room</label>
                                <input type="text" className="login-container__input" placeholder="Room" autoComplete="off"
                                    value={userFields.room} name="room" onChange={onUserFieldsChange} />

                                <input type="submit" value="Enter" className="login-container__submit" />
                            </div>
                        </form>
                    </div>
            }
        </React.Fragment>
    )
}

export default Login;