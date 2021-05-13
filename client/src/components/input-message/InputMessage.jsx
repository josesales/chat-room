import React from 'react';
import './InputMessage.scss';

const InputMessage = () => {

    return (
        <div className="input-message">
            <form id="message-form">
                <textarea name="message" type="text" placeholder="Your Message" required autoComplete="off" />
                <button>Send</button>
            </form>
        </div>
    );
}

export default InputMessage;