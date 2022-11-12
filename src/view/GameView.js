const { Console } = require('@woowacourse/mission-utils');
const IGameView = require('./IGameView');

const GameView = class extends IGameView {
  static input(message, callback) {
    Console.readLine(message, callback);
  }

  static output(messages) {
    messages.forEach(message => {
      Console.print(message);
    });
  }

  static close() {
    Console.close();
  }
};

export default GameView;
