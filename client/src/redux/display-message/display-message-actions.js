import { MessageTypes } from './display-message-types';

export const displayMessage = messageObj => {

    return { type: MessageTypes.DISPLAY_MESSAGE, payload: messageObj };
};