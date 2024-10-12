const io = require('../server').io;
const app = require('../server').app;

const Player = require('./classes/Player');
const PlayerConfig = require('./classes/PlayerConfig');
const PlayerData = require('./classes/PlayerData');
const Orb = require('./classes/Orb');

const orbs = [];
const settings = {
  defaultNumberOfOrbs: 2000,
  defaultSpeed: 6,
  defaultSize: 6,
  defaultZoom: 1.5,
  worldWidth: 2000,
  worldHeight: 2000,
  defaultGenericOrbSize: 5,
};

const players = [];

initGame();

io.on('connect', (socket) => {
  socket.on('init', (playerObj, ackCallback) => {
    const playerName = playerObj.playerName;
    const playerConfig = new PlayerConfig(settings);
    const playerData = new PlayerData(playerName, settings);
    const player = new Player(socket.id, playerConfig, playerData);
    players.push(player);
    ackCallback(orbs);
  });
});

function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb(settings));
  }
}
