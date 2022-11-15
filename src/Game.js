const { Console } = require('@woowacourse/mission-utils');
const { REGEX, LOTTO, MESSAGE } = require('./constant/Lotto');
const Validation = require('./Validation');
const Lotto = require('./Lotto');

class Game {
  initGame() {
    this.askNumber(MESSAGE.INPUT_MONEY, this.proceedStepOne.bind(this));
  }
  askNumber(message, callback) {
    Console.readLine(message, callback);
  }
  proceedStepOne(input) {
    Validation.validateMoney(input);
    const numberOfLotto = Math.floor(input / LOTTO.PRICE);
    const lottoList = this.issueLotto(numberOfLotto);
    this.lottoList = lottoList;
    this.printPurchaseResult(lottoList);
    this.askNumber(MESSAGE.INPUT_NUMBER, this.proceedStepTwo.bind(this));
  }
  issueLotto(numberOfLotto) {
    const lottoList = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const numbers = Lotto.generateNumbers();
      const lottoNumber = new Lotto(numbers).getNumbers();
      lottoList.push(lottoNumber);
    }
    return lottoList;
  }
  printPurchaseResult(lottoList) {
    Console.print(MESSAGE.PURCHASE_RESULT(lottoList.length));
    lottoList.forEach((lotto) => {
      Console.print(MESSAGE.LOTTO_NUMBER(lotto));
    });
  }
  proceedStepTwo(input) {
    const parsedInput = this.parseInput(input);
    const winningNumber = new Lotto(parsedInput).getNumbers();
    this.winningNumber = winningNumber;
    this.askNumber(MESSAGE.INPUT_BONUS_NUMBER, this.proceedStepThree.bind(this));
  }
  parseInput(input) {
    return input.replace(REGEX.PARSE_INPUT, '').split(',');
  }
  proceedStepThree(input) {
    const winningNumber = this.winningNumber;
    const bonusNumber = Number(input);
    Validation.validateBonusNumber(bonusNumber, winningNumber);
    this.bonusNumber = bonusNumber;
    const result = this.compareLotto();
    Console.close();
  }
  compareLotto() {
    const lottoList = this.lottoList;
    const winningNumber = this.winningNumber;
    const result = new Array(LOTTO.TOTAL_RANK).fill(0);
    lottoList.forEach((lottoNumber) => {
      const match = this.countMatch(lottoNumber, winningNumber);
      if (match >= 3) {
        const rank = this.getRank(lottoNumber, match);
        result[rank] += 1;
      }
    });
    return result;
  }
  countMatch(lottoNumber, winningNumber) {
    return lottoNumber.reduce(
      (match, number) => (match += winningNumber.includes(number) ? 1 : 0),
      0
    );
  }
  getRank(lottoNumber, match) {
    const bonusNumber = this.bonusNumber;
    if (match == 6) return LOTTO.RANK.FIRST;
    if (match == 5) return lottoNumber.includes(bonusNumber) ? LOTTO.RANK.SECOND : LOTTO.RANK.THIRD;
    if (match == 4) return LOTTO.RANK.FOURTH;
    if (match == 3) return LOTTO.RANK.FIFTH;
  }
}

module.exports = Game;
