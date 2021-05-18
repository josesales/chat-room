exports.generateMessage = (text, user) => {
    return {
        text,
        user,
        createdAt: new Date(),
    }
}