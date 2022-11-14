const { Console, Random } = require('@woowacourse/mission-utils');
const {
  isNumber,
  isVaildMoney,
  isRightSizeAndNotDuplicated,
  isValidRange,
} = require('./Validation');
const {
  GET_MONEY,
  SHOW_AMOUNT,
  GET_NUMBERS,
  GET_BONUS_NUMBER,
  WINNING_STASTICS,
  MATCHING_3,
  MATCHING_4,
  MATCHING_5,
  MATCHING_5_BONUS,
  MATCHING_6,
  COUNT,
  RETURN_RATE,
  RETURN_RATE_ENDING_WORD,
  ERROR,
} = require('./Messages');

class App {
  constructor() {
    this.lottoCount = 0;
    this.lottoNums = [];
  }

  play() {
    this.getMoney();
  }

  printMessage(message) {
    Console.print(message);
  }

  getMoney() {
    Console.readLine(GET_MONEY, answer => {
      this.lottoCount = Number(answer) / 1000;
      if (!isNumber(answer)) {
        throw new Error(ERROR.NOT_A_NUMBER);
      } else if (!isVaildMoney(answer, 1000)) {
        throw new Error(ERROR.NOT_VALID_MONEY);
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
