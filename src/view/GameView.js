const { Console } = require('@woowacourse/mission-utils');
const IGameView = require('./IGameView');

const GameView = class extends IGameView {
  input(message, callback) {
    Console.readLine(message, callback);
  }

  output(messages) {
    messages.forEach(message => {
      Console.print(message);
    });
  }

  close() {
    Console.close();
  }
};

module.exports = GameView;
