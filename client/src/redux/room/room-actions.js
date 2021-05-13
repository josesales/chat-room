import { RoomActionTypes } from './room-types';


export const setRoom = room => {

    return { type: RoomActionTypes.SET_ROOM, payload: room };
};