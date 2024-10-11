const socket = isObject.connect('http://localhost:3030');

socket.on('init', (initData) => {
  console.log(initData);
  orbs = initData.orbs;
});
