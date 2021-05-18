import { MessageActionTypes } from './message-types';

const INITIAL_STATE = {
    messages: [],
}

const messageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case MessageActionTypes.ADD_MESSAGE:
            return {
                ...state,
                messages: [].concat(state.messages).concat(action.payload),
            };

        default:
            return state;
    }
}

export default messageReducer;