const IGameModel = class {
  validateInput(value, callback) {
    throw Error('메서드구현필요');
  }

  quitWithError(message) {
    throw Error('메서드구현필요');
  }
};

export default IGameModel;
