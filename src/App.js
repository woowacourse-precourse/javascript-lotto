const { getLottoBudget, getTargetNumber, getBonusNumber } = require('./inputUtils');
const Game = require('./Game');
const { LOTTO_PRICE } = require('./config');
const { Console } = require('@woowacourse/mission-utils');
class App {
  play() {
    this.getLottoBudget();
  }

  getLottoBudget() {
    getLottoBudget((budget) => {
      this.budget = budget;
      this.game = new Game(this.budget / LOTTO_PRICE);
      Console.print(this.game.generatePurchasePhrase());
      this.getTargetNumber();
    });
  }

  getTargetNumber() {
    getTargetNumber((target) => {
      this.target = target;
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    getBonusNumber((bonus) => {
      this.bonus = bonus;
      this.startGame();
    });
  }

  startGame() {
    this.game.setWinningBonusNumbers(this.target, this.bonus);
    Console.print(this.game.generateStatPhrase());
    this.endGame();
  }

  endGame() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
