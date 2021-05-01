const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});