const { Console } = require('@woowacourse/mission-utils');
const IGameView = require('./IGameView');

const GameView = class extends IGameView {
  constructor() {
    super();
    if (this.constructor === GameView) {
      throw new Error('추상 클래스로 인스턴스를 생성하였습니다.');
    }
  }

  input(message, callback) {
    Console.readLine(message, callback);
  }

  output(message) {
    Console.print(message);
  }

  close() {
    Console.close();
  }
};

module.exports = GameView;
