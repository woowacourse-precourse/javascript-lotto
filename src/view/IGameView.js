const IGameView = class {
  static input(message, callback) {
    throw Error('메서드구현필요');
  }

  static output(message) {
    throw Error('메서드구현필요');
  }

  static close() {
    throw Error('메서드구현필요');
  }
};

export default IGameView;
