import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './Sidebar.scss';

const Sidebar = () => {

    const room = useSelector(state => state.roomReducer.room);

    let usersInRoom = null;

    const history = useHistory();

    if (room) {
        usersInRoom = room.users.map((user, index) => <li key={index}>{user.name}</li>);
    } else {
        return null;
    }



    const onLeaveClickHandler = () => {
        history.push('/login');
    }

    return (
        <div className="sidebar">

            <div className="room-container">

                <h2>{room.name}</h2>
                <button onClick={onLeaveClickHandler}>Leave</button>
            </div>

            <h3 className="user-name">Users</h3>

            <ul className="user-list">{usersInRoom}</ul>
        </div>
    );
}

export default Sidebar;