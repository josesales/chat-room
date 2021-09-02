import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import logoLight from "../../assets/logo-200x200.png";
import logoDark from "../../assets/logo-200x200-dark.png";
import { WebSocketContext } from '../../context/WebSocketContext';
import { useSelector } from 'react-redux';
import Theme from '../../components/theme/Theme';
import { CenterStyles, InputStyles, LoginContainerStyles, LogoStyles, SubmitStyles } from './LoginStyles';


const Login = () => {

    const [userFields, setUserFields] = useState({ name: '', room: '' });

    const context = useContext(WebSocketContext);

    const user = useSelector(state => state.userReducer.user);
    const theme = useSelector(state => state.themeReducer.theme);

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
        userFields.room = userFields.room.trim().toLowerCase();

        context.addUser(userFields);
    }

    useEffect(() => {

        if (user) {
            //user should be clean during the first time the login page renders
            context.removeUserFromRoom(user);
        }
    }, []);

    return (
        <React.Fragment>
            {
                user ? <Redirect to="/" /> :

                    <LoginContainerStyles>

                        <form onSubmit={onSubmitHandler}>

                            <CenterStyles>

                                <LogoStyles title="Home" src={theme === 'light' ? logoLight : logoDark}
                                    alt="Chat App Logo"  />

                                <h1>Easy Chat</h1>

                                <InputStyles maxLength={20} type="text" placeholder="Name" autoComplete="off" value={userFields.name} name="name" onChange={onUserFieldsChange} />

                                <InputStyles maxLength={20} type="text" placeholder="Room" autoComplete="off" value={userFields.room} name="room" onChange={onUserFieldsChange} />

                                <Theme />

                                <SubmitStyles type="submit" value="Enter" />
                            </CenterStyles>
                        </form>
                    </LoginContainerStyles>
            }
        </React.Fragment>
    )
}

export default Login;