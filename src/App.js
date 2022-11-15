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

const { howManyWinningNums, bonusNum } = require('./Calculator');

class App {
  constructor() {
    this.howManyLottos = 0;
    this.lottoWinNums = [];
    this.lottoBonusNum = 0;
    this.lottoRandomNums = [];
  }

  play() {
    this.getMoney();
  }

  printMessage(message) {
    Console.print(message);
  }

  getMoney() {
    Console.readLine(GET_MONEY, answer => {
      this.howManyLottos = Number(answer) / 1000;
      this.getLottoNum(this.howManyLottos);
      this.buyAutoLottos(this.howManyLottos);
      this.getPrizeNums();

      if (!isNumber(answer)) {
        throw new Error(ERROR.NOT_A_NUMBER);
      } else if (!isVaildMoney(answer, 1000)) {
        throw new Error(ERROR.NOT_VALID_MONEY);
      }
    });
  }

  getLottoNum(input) {
    this.printMessage(input + SHOW_AMOUNT);
  }

  buyOneLotto(min, max, count) {
    return Random.pickUniqueNumbersInRange(min, max, count).sort(
      (a, b) => a - b,
    );
  }

  buyAutoLottos(num) {
    while (this.lottoRandomNums.length < num) {
      this.lottoRandomNums.push(this.buyOneLotto(1, 45, 6));
    }
    this.lottoRandomNums.map(el => this.printMessage(el));
  }

  getPrizeNums() {
    Console.readLine(GET_NUMBERS, answer => {
      this.lottoWinNums = answer
        .replace(' ', '')
        .split(',')
        .map(el => Number(el));
      return this.getBonusNum();
    });
  }

  getBonusNum() {
    Console.readLine(GET_BONUS_NUMBER, answer => {
      this.lottoBonusNum = Number(answer);
      return this.getScoreArray(this.lottoRandomNums);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
