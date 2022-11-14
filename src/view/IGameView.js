const IGameView = class {
  input(message, callback) {
    throw Error('메서드구현필요');
  }

  output(message) {
    throw Error('메서드구현필요');
  }

  close() {
    throw Error('메서드구현필요');
  }
};

module.exports = IGameView;
