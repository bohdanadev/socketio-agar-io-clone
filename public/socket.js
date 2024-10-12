const socket = io.connect('http://localhost:3030');

const init = async () => {
  const initOrbs = await socket.emitWithAck('init', {
    playerName: player.name,
  });
  orbs = initOrbs;
  draw();
};

socket.on('initReturn', (initData) => {
  console.log(initData);
  orbs = initData.orbs;
});
