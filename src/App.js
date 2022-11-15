const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTO_STATUS, PRIZE, MESSAGES, ERROR_MESSAGES } = require("./enum");

class App {
  constructor() {
    this.winningNumber = [];
    this.myLottery = [];
    this.result = [0, 0, 0, 0, 0, 0];
  }

  getPlayerInput() {
    let count;

    MissionUtils.Console.readLine(MESSAGES.PURCHASE_PRICE_MESSAGE, (input) => {
      this.validateCost(input);
      count = parseInt(input) / 1000;
      this.printMessage(`${count}${MESSAGES.LOTTO_COUNT_MESSAGE}`);
      this.buyLotto(count);
      this.getWinningNumbersInput();
    });
  }

  validateCost(input) {
    this.isNumber(input);
    let cost = parseInt(input);

    if (cost % 1000) {
      throw new Error(ERROR_MESSAGES.COST_ERROR);
    }
  }

  buyLotto(count) {
    let lotto;

    for (let index = 0; index < count; index++) {
      lotto = new Lotto(this.getRandomNumber());
      this.myLottery.push(lotto);
    }
  }

  getResult(bonusNumber) {
    let lottoResult = 0;

    for (let index = 0; index < this.myLottery.length; index++) {
      lottoResult = this.myLottery[index].isWinLottery(
        this.winningNumber,
        bonusNumber
      );
      this.result[lottoResult]++;
    }
    this.printMessage("당첨 통계\n---");
    this.printPrize();
    this.calcProfit();
  }

  printPrize() {
    this.printMessage(
      `3개 일치 (${PRIZE.FIFTH_PRIZE.toLocaleString()}원) - ${
        this.result[5]
      }개\n
      4개 일치 (${PRIZE.FOURTH_PRIZE.toLocaleString()}원) - ${
        this.result[4]
      }개\n
      5개 일치 (${PRIZE.THIRD_PRIZE.toLocaleString()}원) - ${this.result[3]}개\n
      5개 일치, 보너스 볼 일치 (${PRIZE.SECOND_PRIZE.toLocaleString()}원) - ${
        this.result[2]
      }개\n
      6개 일치 (${PRIZE.FIRST_PRIZE.toLocaleString()}원) - ${this.result[1]}개`
    );
  }

  calcProfit() {
    let totalPrize =
      this.result[1] * PRIZE.FIRST_PRIZE +
      this.result[2] * PRIZE.SECOND_PRIZE +
      this.result[3] * PRIZE.THIRD_PRIZE +
      this.result[4] * PRIZE.FOURTH_PRIZE +
      this.result[5] * PRIZE.FIFTH_PRIZE;
    let cost = this.myLottery.length * 1000;
    let profit = ((totalPrize / cost) * 100).toFixed(1);

    this.printMessage(`총 수익률은 ${profit}%입니다.`);
  }

  getWinningNumbersInput() {
    MissionUtils.Console.readLine(MESSAGES.WINNING_NUMBER_MESSAGE, (input) => {
      this.validateWinningNumbers(input);
      this.getBonusNumberInput();
    });
  }

  validateWinningNumbers(input) {
    let splitInput = input.split(",");
    let checkNumber;

    this.validateLength(splitInput, LOTTO_STATUS.LENGTH);
    for (let index = 0; index < splitInput.length; index++) {
      this.isNumber(splitInput[index]);
      checkNumber = parseInt(splitInput[index]);
      this.validateNumberRange(checkNumber);
      this.winningNumber.push(checkNumber);
    }
  }

  getBonusNumberInput() {
    MissionUtils.Console.readLine(MESSAGES.BONUS_NUMBER_MESSAGE, (input) => {
      this.validateBonusNumber(input);
      this.getResult(parseInt(input));
    });
  }

  validateBonusNumber(input) {
    this.isNumber(input);
    this.validateNumberRange(parseInt(input));
    this.validateNumberOvelap(parseInt(input));
  }

  validateNumberOvelap(number) {
    if (this.winningNumber.includes(number)) {
      throw new Error(ERROR_MESSAGES.OVERLAP_ERROR);
    }
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  getRandomNumber() {
    const ret = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_STATUS.MIN,
      LOTTO_STATUS.MAX,
      LOTTO_STATUS.LENGTH
    );
    ret.sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    return ret;
  }

  isNumber(number) {
    const regExp = /\D/g;

    if (regExp.test(number)) {
      throw new Error(ERROR_MESSAGES.INPUT_ERROR);
    }
  }

  validateLength(numbers, length) {
    if (numbers.length !== length) {
      throw new Error(ERROR_MESSAGES.LENGTH_ERROR);
    }
  }

  validateNumberRange(number) {
    if (number < LOTTO_STATUS.MIN || number > LOTTO_STATUS.MAX) {
      throw new Error(ERROR_MESSAGES.RANGE_ERROR);
    }
  }

  play() {
    this.getPlayerInput();
  }
}

module.exports = App;
