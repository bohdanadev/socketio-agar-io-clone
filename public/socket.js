const socket = io.connect('http://localhost:3030');

const init = async () => {
  const initOrbs = await socket.emitWithAck('init', {
    playerName: player.name,
  });
  setInterval(() => {
    socket.emit('tock', {
      xVector: player.xVector ?? 0.1,
      yVector: player.yVector ?? 0.1,
    });
  }, 16);
  orbs = initOrbs;
  draw();
};

socket.on('tick', (playersArray) => {
  console.log(players);
  players = playersArray;
});
