const ConsoleWork = require('./ConsoleWork');
const Lotto = require('./Lotto');
const Message = require('./Message');

class App {
  play() {
    ConsoleWork.print(Message.START_MESSAGE);
    ConsoleWork.takeInput('', function (money) {
      const lotto = new Lotto(money);
      lotto.startGame();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
