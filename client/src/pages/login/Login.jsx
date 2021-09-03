import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import logoLight from "../../assets/logo-200x200.png";
import logoDark from "../../assets/logo-200x200-dark.png";
import { WebSocketContext } from '../../context/WebSocketContext';
import { useDispatch, useSelector } from 'react-redux';
import Theme from '../../components/theme/Theme';
import { CenterStyles, InputStyles, LoginContainerStyles, LogoStyles, SubmitStyles } from './LoginStyles';
import { displayMessage } from '../../redux/display-message/display-message-actions';
import DisplayMessage from '../../components/display-message/DisplayMessage';


const Login = () => {

    const [userFields, setUserFields] = useState({ name: '', room: '' });

    const context = useContext(WebSocketContext);

    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const theme = useSelector(state => state.themeReducer.theme);
    const { type, message } = useSelector(state => state.displayMessageReducer);

    const onUserFieldsChange = event => {
        const { value, name } = event.target;

        setUserFields({ ...userFields, [name]: value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        if (!userFields.name || !userFields.room) {
        
            window.scrollTo(0, 0);
            dispatch(displayMessage({type:'alert', message: 'User Name and Room are required!'}));
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
                        {
                            type && message ? <DisplayMessage type={type} message={message} /> : null
                        }
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