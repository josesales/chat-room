import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { MessageContainerStyles, MessageStyles, MessageUserStyles, UserNameStyles, DateStyles } from './MessageStyles';

const Message = () => {

    const messages = useSelector(state => state.messageReducer.messages);
    const user = useSelector(state => state.userReducer.user);

    let messagesUi = null;

    const messageDiv = useRef();

    useEffect(() => {

        if (messageDiv.current) {
            messageDiv.current.scrollIntoView();
        }
    }, [messages]);

    if (messages) {
        messagesUi = messages.map((message, index) => {

            //Display only the messages from the room of the user
            if (user && message && message.user && message.user.room === user.room) {

                return (
                    <MessageStyles key={index} ref={messageDiv}>

                        <MessageUserStyles>
                            {
                                message.user && message.user.name ?

                                    <React.Fragment>
                                        <UserNameStyles>{message.user.name}</UserNameStyles>
                                        <DateStyles>
                                            {moment(message.createdAt).format('DD MMM YYYY, h:mm a')}
                                        </DateStyles>
                                    </React.Fragment>
                                    : null
                            }
                        </MessageUserStyles>

                        {
                            !message.user || !message.user.name ?

                                <MessageUserStyles>

                                    <p>{message.text}</p>

                                    <DateStyles>
                                        {moment(message.createdAt).format('DD MMM YYYY, h:mm a')}
                                    </DateStyles> 
                                </MessageUserStyles> :

                                   <React.Fragment>
                                        {
                                            message.text.split('\n').map((text, index) => <p key={index}>{text}</p>)
                                        }
                                    </React.Fragment>
                            
                        }
                    </MessageStyles>

                );
            }
            return null;
        });
    }

    return (
        <MessageContainerStyles>
            {messagesUi}
        </MessageContainerStyles>
    );
}

export default Message;