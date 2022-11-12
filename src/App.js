const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { Messages, winnings } = require('./constants');

class App {
  constructor() {
    this.myMoney;
    this.winningNumbers;
    this.bonusNumber;
    this.myLottos = [];
    this.result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  play() {
    this.requestMoneyInput();
  }

  requestMoneyInput() {
    Console.readLine(Messages.REQUEST_MONEY_INPUT, (input) => {
      const money = Number(input);
      this.validateMoney(money);
      this.myMoney = money;
      this.createLotto(this.myMoney);
      this.requestWinningNumbersInput();
    });
  }

  validateMoney(money) {
    if (money <= 0) {
      throw new Error(Messages.ERROR_MINIMUM_MONEY_INPUT);
    }
    if (Number.isNaN(money)) {
      throw new Error(Messages.ERROR_NUMBER_ONLY);
    }
    if (!Number.isInteger(money / 1000)) {
      throw new Error(Messages.ERROR_1000_UNITS_ONLY);
    }
  }

  createLotto(money) {
    const numberToCreate = money / 1000;
    Console.print(`\n${numberToCreate}개를 구매했습니다.`);
    while (this.myLottos.length < numberToCreate) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      const lottoNumbers = lotto.getNumbers();
      this.myLottos.push(lottoNumbers);
      Console.print(`[${lottoNumbers.join(', ')}]`);
    }
  }

  requestWinningNumbersInput() {
    Console.readLine(Messages.REQUEST_WINNING_NUMBERS_INPUT, (input) => {
      const numbers = input.split(',').map((digit) => Number(digit));
      const winningLotto = new Lotto(numbers);
      this.winningNumbers = winningLotto.getNumbers();
      this.requestBonusNumberInput();
    });
  }

  requestBonusNumberInput() {
    Console.readLine(Messages.REQUEST_BONUS_NUMBER_INPUT, (input) => {
      const number = Number(input);
      this.validateBonusNumber(number);
      this.bonusNumber = number;
      this.getResult();
      this.printResult();
      Console.close();
    });
  }

  validateBonusNumber(number) {
    if (Number.isNaN(number) || number < 1 || number > 45) {
      throw new Error(Messages.ERROR_BONUS_NUMBER_RANGE);
    }
    if (this.winningNumbers.includes(number)) {
      throw new Error(Messages.ERROR_BONUS_NUMBER_DUPLICATE);
    }
  }

  getResult() {
    this.myLottos.forEach((lotto) => {
      const matchNumbers = lotto.filter((number) => this.winningNumbers.includes(number));
      const hasBonusNumber = lotto.some((number) => number === this.bonusNumber);
      this.updateResult(matchNumbers, hasBonusNumber);
    });
  }

  updateResult(matchNumbers, hasBonusNumber) {
    const matchCount = matchNumbers.length;
    if (matchCount === 6) {
      this.result.first += 1;
    } else if (matchCount === 5 && hasBonusNumber) {
      this.result.second += 1;
    } else if (matchCount === 5 && !hasBonusNumber) {
      this.result.third += 1;
    } else if (matchCount === 4) {
      this.result.fourth += 1;
    } else if (matchCount === 3) {
      this.result.fifth += 1;
    }
  }

  printResult() {
    const winnings = this.getWinnings();
    const RateOfReturn = (winnings / this.myMoney * 100).toFixed(1);
    const result = `
당첨 통계
---
3개 일치 (5,000원) - ${this.result.fifth}개
4개 일치 (50,000원) - ${this.result.fourth}개
5개 일치 (1,500,000원) - ${this.result.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.second}개
6개 일치 (2,000,000,000원) - ${this.result.first}개
총 수익률은 ${RateOfReturn}%입니다.`;
    Console.print(result);
  }

  getWinnings() {
    const firstWinnings = this.result.first * winnings.FIRST;
    const secondWinnings = this.result.second * winnings.SECOND;
    const thirdWinnings = this.result.third * winnings.THIRD;
    const fourthWinnings = this.result.fourth * winnings.FOURTH;
    const fifthWinnings = this.result.fifth * winnings.FIFTH;
    return firstWinnings + secondWinnings + thirdWinnings + fourthWinnings + fifthWinnings;
  }
}

module.exports = App;
