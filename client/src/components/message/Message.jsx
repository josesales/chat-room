import React from 'react';
import './Message.scss';

const Message = () => {

    let messages = [2, 2]
    messages = messages.map(message => {
        return (
            <div className="message">
                <div className="message__user">
                    <p className="message__user--name">Sales</p>
                    <p className="message__user--date">10/03/2021</p>
                </div>
                <p className="message__text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                </p>
            </div>

        );
    });

    return (
        <div className="message-container">
            {messages}
        </div>
    );
}

export default Message;