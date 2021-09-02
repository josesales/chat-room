import React, { useContext, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../../context/WebSocketContext';
import { InputMessageStyles, FormStyles, TextAreaContainer, TextAreaStyles, ButtonStyles, InfoStyles } from './InputMessageStyles';

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
        if(value.trim()) {
            setMessageFields({ ...messageFields, text: value });
        }
    };
    
    const onMessageKeyDown = event => {

        const { keyCode, shiftKey } = event;
        
        if(keyCode === 13 && !shiftKey) {
            //Submit if user press enter and it breaks the line if user press shift + enter
            onSubmitHandler();
        }
    };

    const onSubmitHandler = e => {
        e?.preventDefault();

        if (!messageFields.text || !messageFields.text.trim()) {

            if (textInput.current) {
                textInput.current.focus();
            }

            return;
        }

        context.addMessage({ ...messageFields, createdAt: new Date() });
        setMessageFields({...messageFieldsInitialState});

        if (textInput.current) {
            textInput.current.focus();
        }
    }

    return (
        <React.Fragment>
            <InputMessageStyles>
                <FormStyles>
                    
                    <TextAreaContainer>  
                        
                        <TextAreaStyles ref={textInput} type="text" name="message" value={messageFields.text}
                            placeholder="Your Message" onChange={onMessageChange} onKeyDown={onMessageKeyDown} required autoComplete="off" />
                        <InfoStyles>Press shift + Enter for line break.</InfoStyles>
                    </TextAreaContainer>  

                    <ButtonStyles onClick={onSubmitHandler}>Send</ButtonStyles>
                </FormStyles>
            </InputMessageStyles>

        </React.Fragment>
    );
}

export default InputMessage;