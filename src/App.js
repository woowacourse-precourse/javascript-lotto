const { QUERY } = require("./Constant");
const { readLine, close } = require("./UI");
const Validate = require("./Validate");
const { pickUniqueNumbersInRange } = require("./Random");

class App {
  play() {
    this.askHowMuchBuy();
  }

  askHowMuchBuy() {
    readLine(QUERY.HOW_MUCH_BUY, (answer) => {
      Validate.checkMultipleOf1000(answer);

      this.createLottoOfUser(answer / 1000);
    });
  }

  createLottoOfUser(number) {
    const lotto = [];

    for (let i = 0; i < number; i += 1)
      lotto.push(pickUniqueNumbersInRange(1, 45, 6));
    return lotto;
  }
}

module.exports = App;

const app = new App();
app.play();
