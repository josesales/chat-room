import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './Message.scss';

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
            if (user && message && message.user && message.user.room == user.room) {
                return (
                    <div key={index} ref={messageDiv} className="message">

                        <div className="message__user">
                            {
                                message.user && message.user.name ?

                                    <React.Fragment>
                                        <p className="message__user--name">{message.user.name}</p>
                                        <p className="message__user--date">
                                            {moment(message.createdAt).format('DD MMM YYYY, h:mm a')}
                                        </p>
                                    </React.Fragment>
                                    : null
                            }
                        </div>

                        <p className="message__text">
                            {message.text}
                        </p>
                    </div>

                );
            }
            return null;
        });
    }

    return (
        <div className="message-container">
            {messagesUi}
        </div>
    );
}

export default Message;