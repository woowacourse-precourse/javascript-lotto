const ConsoleWork = require('./ConsoleWork');
const Lotto = require('./Lotto');
const Message = require('./Message');

class App {
  play() {
    ConsoleWork.takeInput(Message.START_MESSAGE + '\n', function (money) {
      const lotto = new Lotto(money);
      lotto.startGame();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
