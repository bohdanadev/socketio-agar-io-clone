// Entrypoint for Express

const app = require('../server').app;
const io = require('../server').io;

module.exports = app;
