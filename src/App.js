const { getLottoBudget, getTargetNumber, getBonusNumber } = require('./inputUtils');
const Game = require('./Game');
const { LOTTO_PRICE } = require('./config');
class App {
  play() {
    this.getLottoBudget();
  }

  getLottoBudget() {
    getLottoBudget((budget) => {
      this.budget = budget;
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
    this.game = new Game(this.budget / LOTTO_PRICE, this.target, this.bonus);
    console.log(this.game.generatePhrase());
  }
}

const app = new App();
app.play();

module.exports = App;
