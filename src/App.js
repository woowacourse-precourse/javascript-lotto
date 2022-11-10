const { QUERY } = require("./Constant");
const { readLine, close } = require("./UI");
const Validate = require("./Validate");
const { pickUniqueNumbersInRange } = require("./Random");

class App {
  constructor() {
    this.lottosOfUser = [];
    this.wininngNumber = [];
    this.bonusNumber = 0;
  }

  play() {
    this.askHowMuchBuy();
  }

  askHowMuchBuy() {
    readLine(QUERY.HOW_MUCH_BUY, (answer) => {
      Validate.checkMultipleOf1000(answer);

      this.createLottosOfUser(answer / 1000);

      this.askWinningNumber();
    });
  }

  createLottosOfUser(number) {
    const lottos = [];

    for (let i = 0; i < number; i += 1)
      lottos.push(pickUniqueNumbersInRange(1, 45, 6));

    this.lottosOfUser = lottos;
  }

  askWinningNumber() {
    readLine(QUERY.WIN_NUMBER, (answer) => {
      Validate.checkWinningNumber(answer);

      this.setWinningNumber(answer);

      this.askBonusNumber();
    });
  }

  setWinningNumber(answer) {
    this.wininngNumber = Array.from(answer.split(","), Number);
  }

  askBonusNumber() {
    readLine(QUERY.BONUS_NUMBER, (answer) => {
      Validate.checkBonusNumber(this.wininngNumber, answer);

      this.setBonusNumber(answer);
    });
  }

  setBonusNumber(answer) {
    this.bonusNumber = parseInt(answer, 10);
  }
}

module.exports = App;

const app = new App();
app.play();
