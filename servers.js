//create servers
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.static(__dirname + '/public'));
const cors = require('cors');
app.use(cors);
const expressServer = app.listen(PORT);
const socketio = require('socket.io');
const io = socketio(expressServer);

module.exports = {
  app,
  io,
};
