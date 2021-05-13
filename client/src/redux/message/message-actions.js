import { MessageActionTypes } from './message-types';


export const addMessage = message => {

    return { type: MessageActionTypes.ADD_MESSAGE, payload: message };
};