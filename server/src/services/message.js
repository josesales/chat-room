exports.generateMessage = (text, userName) => {
    return {
        text,
        createdAt: new Date().getTime(),
        userName
    }
}

exports.generateLocationMessage = (url, userName) => {
    return {
        url,
        createdAt: new Date().getTime(),
        userName
    }
}