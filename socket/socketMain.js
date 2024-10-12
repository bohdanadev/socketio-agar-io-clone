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

initGame();

io.on('connect', (socket) => {
  const playerName = 'Player';
  const playerConfig = new PlayerConfig(settings);
  const playerData = new PlayerData(playerName, settings);
  player = new Player(socket.id, playerConfig, playerData);
  socket.emit('init', {
    orbs,
  });
});

function initGame() {
  for (let i = 0; i < 500; i++) {
    orbs.push(new Orb(settings));
  }
}
