const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const Bonus = require('./Bonus');
const Cost = require('./Cost');
const Lotto = require('./Lotto');
const {
  VALID_LOTTO,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  LOTTO_RANK_MONEY,
} = require('./constant');

class App {
  constructor() {
    this.cost;
    this.lottoArray = [];
    this.winningLottoNumberArray = [];
    this.bonusNumber;
    this.lottoResult = [0, 0, 0, 0, 0, 0];
    this.rateOfResult;
    this.lottoQuantity;
  }

  getCost() {
    Console.readLine(INPUT_MESSAGE.COST, userInputCost => {
      this.cost = new Cost(userInputCost);
    });
  }

  printLottoQuantity() {
    this.lottoQuantity = this.cost.getValue() / 1000;
    Console.print(`${this.lottoQuantity}${OUTPUT_MESSAGE.LOTTO_QUANTITY}`);
  }

  createLottoArray() {
    for (let i = 0; i < this.lottoQuantity; i++) {
      let lotto = Random.pickUniqueNumbersInRange(
        VALID_LOTTO.NUMBER_MIN,
        VALID_LOTTO.NUMBER_MAX,
        VALID_LOTTO.NUMBER_COUNT
      );
      lotto.sort(function (one, two) {
        return one - two;
      });
      this.printLotto(lotto);
      this.lottoArray.push(lotto);
    }
  }

  printLotto(lotto) {
    let lottoPrint = '[';
    for (let i = 0; i < lotto.length; i++) {
      if (i !== lotto.length - 1) lottoPrint += `${lotto[i]}, `;
      else lottoPrint += `${lotto[i]}]`;
    }
    Console.print(lottoPrint);
  }

  getWinningLottoNumberArray() {
    Console.readLine(INPUT_MESSAGE.WINNING_NUMBER, winningLottoNumberInput => {
      let winningLottoNumberInputArray = winningLottoNumberInput
        .split(',')
        .map(number => Number(number));
      this.winningLottoNumberArray = new Lotto(winningLottoNumberInputArray);
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, bonumNumberInput => {
      this.bonusNumber = new Bonus(
        bonumNumberInput,
        this.winningLottoNumberArray.getValue()
      );
    });
  }

  checkReduplication() {
    let winningLottoArray = this.winningLottoNumberArray.getValue();
    for (let i = 0; i < this.lottoArray.length; i++) {
      let count = 0;
      let bonusBoolean = false;
      this.lottoArray[i].filter(number => {
        if (winningLottoArray.includes(number)) count++;
        if (number === Number(this.bonusNumber.getValue())) {
          bonusBoolean = true;
        }
      });
      this.addLottoResult(count, bonusBoolean);
    }
  }

  addLottoResult(count, bonusBoolean) {
    if (count === 3) this.lottoResult[1]++;
    if (count === 4) this.lottoResult[2]++;
    if (count === 5 && !bonusBoolean) this.lottoResult[3]++;
    if (count === 5 && bonusBoolean) this.lottoResult[4]++;
    if (count === 6) this.lottoResult[5]++;
  }

  calculateRateOfReturn() {
    let benefitSum = this.addAllbenefit();

    this.rateOfResult = ((benefitSum / this.cost.getValue()) * 100).toFixed(1);
  }

  addAllbenefit() {
    let benefit = 0;
    for (let i = 0; i < this.lottoResult.length; i++) {
      if (this.lottoResult[i] !== 0) {
        if (i === 1) benefit += LOTTO_RANK_MONEY.FIFTH * this.lottoResult[i];
        if (i === 2) benefit += LOTTO_RANK_MONEY.FOURTH * this.lottoResult[i];
        if (i === 3) benefit += LOTTO_RANK_MONEY.THIRD * this.lottoResult[i];
        if (i === 4) benefit += LOTTO_RANK_MONEY.SECOND * this.lottoResult[i];
        if (i === 5) benefit += LOTTO_RANK_MONEY.FIRST * this.lottoResult[i];
      }
    }
    return benefit;
  }

  printLottoResult() {
    Console.print(OUTPUT_MESSAGE.WINNING_NOTICE);
    for (let i = 1; i < OUTPUT_MESSAGE.WINNING_STATISTICS.length; i++) {
      Console.print(
        `${OUTPUT_MESSAGE.WINNING_STATISTICS[i]} ${this.lottoResult[i]}${OUTPUT_MESSAGE.COUNT_UNIT}`
      );
    }
  }

  printLottoRateOfResult() {
    Console.print(
      `${OUTPUT_MESSAGE.WINNING_RATE_OF_RESULT_NOTICE_START} ${this.rateOfResult}${OUTPUT_MESSAGE.WINNING_RATE_OF_RESULT_NOTICE_END}`
    );
  }

  endLottoGame() {
    Console.close();
  }

  play() {
    this.getCost();
    this.printLottoQuantity();
    this.createLottoArray();
    this.getWinningLottoNumberArray();
    this.getBonusNumber();
    this.checkReduplication();
    this.calculateRateOfReturn();
    this.printLottoResult();
    this.printLottoRateOfResult();
    this.endLottoGame();
  }
}

module.exports = App;
