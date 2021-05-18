import React, { useContext, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../../context/WebSocketContext';
import './InputMessage.scss';

const InputMessage = () => {

    const context = useContext(WebSocketContext);
    const user = useSelector(state => state.userReducer.user);

    const messageFieldsInitialState = {
        text: '',
        user: user,
        createdAt: null,
    }

    const [messageFields, setMessageFields] = useState(messageFieldsInitialState);

    const textInput = useRef();

    const onMessageChange = event => {

        const { value } = event.target;
        setMessageFields({ ...messageFields, text: value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        if (!messageFields.text || !messageFields.text.trim()) {

            if (textInput.current) {
                textInput.current.focus();
            }

            return;
        }

        context.addMessage({ ...messageFields, createdAt: new Date() });
        setMessageFields(messageFieldsInitialState);

        if (textInput.current) {
            textInput.current.focus();
        }
    }

    return (
        <div className="input-message">
            <form className="input-message__form" onSubmit={onSubmitHandler}>

                <input ref={textInput} type="text" name="message" value={messageFields.text} placeholder="Your Message"
                    className="input-message__input" onChange={onMessageChange} required autoComplete="off" />

                <button className="input-message__button" onClick={onSubmitHandler}>Send</button>
            </form>
        </div>
    );
}

export default InputMessage;