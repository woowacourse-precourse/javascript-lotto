const IGameModel = require('./IGameModel');

const GameModel = class extends IGameModel {
  constructor() {
    super();
    if (this.constructor === GameModel) {
      throw new Error('추상 클래스로 인스턴스를 생성하였습니다.');
    }
  }
};

module.exports = GameModel;
