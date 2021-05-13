import io from 'socket.io-client';
import React, { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { addUser as addUserAction } from '../redux/user/user-actions';
import { addMessage } from '../redux/message/message-actions';
import { setRoom } from '../redux/room/room-actions';

let socket = io.connect('http://localhost:5000', {
    transports: ['websocket', 'polling'],
    secure: true,
    reconnection: true,
    rejectUnauthorized: false
});

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});


export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {

    const dispatch = useDispatch();

    const addUser = async (props) => {

        if (props) {

            const { name, room } = props;
            socket.emit('addUser', { name, room }, error => {

                if (error) {
                    alert(error);
                    return;
                }

                dispatch(addUserAction({ name, room }));
            });
        } else {

            dispatch(addUserAction(props));
        }
    }

    const context = {
        addUser,
    }

    socket.on('setMessage', message => {
        dispatch(addMessage(message));
    });

    //Notify when users join and leave the room
    socket.on('setRoom', room => {
        dispatch(setRoom(room));
    });

    return (
        <WebSocketContext.Provider value={context}>
            {children}
        </WebSocketContext.Provider>
    )

}
