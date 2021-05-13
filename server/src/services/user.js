const users = [];

exports.addUser = ({ id, name, room }) => {
    //Clean the data
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Validate Data
    if (!name || !room) {
        return {
            error: 'User Name and Room are required!'
        }
    }

    //Check for existing users
    const existingUser = users.find(user => {
        return user.userName == name && user.room == room
    });

    //Validate username
    if (existingUser) {
        return {
            error: 'User Name is already in use!'
        }
    }

    //Store user
    const user = { id, name, room };
    users.push(user);

    return { user };
}

exports.removeUser = id => {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

exports.getUser = id => {
    const user = users.find(user => user.id === id);

    if (!user) {
        return {
            error: 'User not found!'
        }
    }

    return user;
}

exports.getUsersInRoom = room => {
    return users.filter(user => user.room === room);
}
