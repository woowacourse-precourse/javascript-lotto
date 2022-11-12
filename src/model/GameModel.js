import IGameModel from './IGameModel';

const GameModel = class extends IGameModel {
  validateInput(value, callback) {
    return callback(value);
  }

  quitWithError(message) {
    throw Error(`[ERROR] ${message}`);
  }
};

export default GameModel;
