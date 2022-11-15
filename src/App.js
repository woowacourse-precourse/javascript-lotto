const { Console, Random } = require('@woowacourse/mission-utils');
const { isNumber, isVaildMoney } = require('./Validation');
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

const {
  howManyWinningNums,
  bonusNum,
  getTotalPrize,
  getWinningRate,
} = require('./Calculator');

const Lotto = require('./Lotto');

class App {
  constructor() {
    this.howManyLottos = 0;
    this.lottoWinNums = [];
    this.lottoBonusNum = 0;
    this.lottoRandomNums = [];
  }

  play() {
    this.startGame();
  }

  printMessage(message) {
    Console.print(message);
  }

  startGame() {
    Console.readLine(GET_MONEY, answer => {
      this.howManyLottos = Number(answer) / 1000;
      this.buyAutoLottos(this.howManyLottos);
      this.getPrizeNums();

      if (!isNumber(answer)) {
        throw new Error(ERROR.NOT_A_NUMBER);
      } else if (!isVaildMoney(answer, 1000)) {
        throw new Error(ERROR.NOT_VALID_MONEY);
      }
    });
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
    this.printMessage(num + SHOW_AMOUNT);
    this.lottoRandomNums.map(el =>
      this.printMessage(`[${el.toString().split(',').join(', ')}]`),
    );
  }

  getPrizeNums() {
    Console.readLine(GET_NUMBERS, answer => {
      const prizeNum = new Lotto(
        answer
          .replace(' ', '')
          .split(',')
          .map(el => Number(el)),
      );
      this.lottoWinNums = prizeNum.getNumbers;
      return this.getBonusNum();
    });
  }

  getBonusNum() {
    Console.readLine(GET_BONUS_NUMBER, answer => {
      this.lottoBonusNum = Number(answer);
      const winNums = this.lottoWinNums;

      if (winNums.includes(Number(answer)))
        throw new Error(ERROR.DUPLICATED_BONUS_NUM);
      else if (!isNumber(answer)) throw new Error(ERROR.NOT_A_NUMBER);
      return this.getScoreArray(this.lottoRandomNums);
    });
  }

  getScoreArray(arr) {
    let setScoreArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      let setScore = { correct: 0, bonus: 0 };
      setScore.correct = howManyWinningNums(this.lottoWinNums, arr[i]);
      setScore.bonus = bonusNum(this.lottoBonusNum, arr[i]);
      setScoreArr.push(setScore);
    }
    return this.matchingPrize(setScoreArr);
  }

  matchingPrize(arr) {
    let prizeState = {
      matching_3: 0,
      matching_4: 0,
      matching_5: 0,
      matching_5_bonus: 0,
      matching_6: 0,
    };
    prizeState.matching_3 = arr.filter(el => el.correct === 3).length;
    prizeState.matching_4 = arr.filter(el => el.correct === 4).length;
    prizeState.matching_5 = arr.filter(
      el => el.correct === 5 && el.bonus === 0,
    ).length;
    prizeState.matching_5_bonus = arr.filter(
      el => el.correct === 5 && el.bonus === 1,
    ).length;
    prizeState.matching_6 = arr.filter(el => el.correct === 6).length;
    return this.getStatistics(prizeState);
  }

  getStatistics(prizeState) {
    const totalRate = getWinningRate(
      getTotalPrize(prizeState),
      this.howManyLottos,
    );
    this.printMessage(
      WINNING_STASTICS +
        MATCHING_3 +
        prizeState.matching_3 +
        COUNT +
        MATCHING_4 +
        prizeState.matching_4 +
        COUNT +
        MATCHING_5 +
        prizeState.matching_5 +
        COUNT +
        MATCHING_5_BONUS +
        prizeState.matching_5_bonus +
        COUNT +
        MATCHING_6 +
        prizeState.matching_6 +
        COUNT +
        RETURN_RATE +
        totalRate +
        RETURN_RATE_ENDING_WORD,
    );
    Console.close();
  }
}

module.exports = App;
