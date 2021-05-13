import React from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.scss';

const Sidebar = () => {

    const room = useSelector(state => state.roomReducer.room);

    const usersInRoom = room.users.map(user => <li key={user.id}>{user.name}</li>);

    return (
        <div className="sidebar">

            <div className="room-name">
                <h2>{room.name}</h2>
            </div>

            <h3 className="user-name">Users</h3>

            <ul className="user-list">{usersInRoom}</ul>
        </div>
    );
}

export default Sidebar;