import { UserActionTypes } from './user-types';


export const addUser = user => {

    return { type: UserActionTypes.ADD_USER, payload: user };
};