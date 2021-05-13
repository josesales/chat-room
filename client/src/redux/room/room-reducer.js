import { RoomActionTypes } from './room-types';

const INITIAL_STATE = {
    room: null,
}

const roomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case RoomActionTypes.SET_ROOM:
            return {
                ...state,
                room: action.payload,
            };

        default:
            return state;
    }
}

export default roomReducer;