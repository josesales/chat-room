import React, { useContext, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../../context/WebSocketContext';
import { InputMessageStyles, FormStyles, TextAreaStyles, ButtonStyles } from './InputMessageStyles';

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
        <React.Fragment>
            <InputMessageStyles>
                <FormStyles onSubmit={onSubmitHandler}>

                    <TextAreaStyles ref={textInput} type="text" name="message" value={messageFields.text}
                        placeholder="Your Message" onChange={onMessageChange} required autoComplete="off" />

                    <ButtonStyles onClick={onSubmitHandler}>Send</ButtonStyles>
                </FormStyles>
            </InputMessageStyles>
        </React.Fragment>
    );
}

export default InputMessage;