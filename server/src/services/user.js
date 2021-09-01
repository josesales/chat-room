let users = [];

exports.addUser = ({ id, name, room }) => {

    try {

        name = name.trim().toLowerCase();
        room = room.trim().toLowerCase();

        if (!name || !room) {
            throw new Error('User Name and Room are required!');
        }

        //Check for existing users
        const existingUser = users.find(user => {
            return user.name === name && user.room === room
        });

        if (existingUser) {
            throw new Error('This Name is already being used in this room!');
        }

        const user = { id, name, room };
        users.push(user);

        return { user };
    } catch (e) {

        return {
            error: e.message
        }
    }
}

//Remove user from the room
exports.removeUserFromRoom = userData => {

    try {

        users = users.filter(user => {
            const { name, room } = userData;

            return user.room.toLowerCase() !== room.trim().toLowerCase() ||
                (user.room.toLowerCase() === room.trim().toLowerCase() && user.name.toLowerCase() !== name.trim().toLowerCase());
        });

    } catch (e) {

        return {
            error: e.message
        }
    }

}

exports.getUsersInRoom = room => {
    return users.filter(user => user.room.toLowerCase() === room.toLowerCase());
}
