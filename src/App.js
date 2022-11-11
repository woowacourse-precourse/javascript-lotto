const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

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
    Console.readLine('구입 금액을 입력해 주세요.\n', (input) => {
      const money = Number(input);
      this.validateMoney(money);
      this.myMoney = money;
      this.createLotto(this.myMoney);
      this.requestWinningNumbersInput();
    });
  }

  validateMoney(money) {
    if (Number.isNaN(money)) {
      throw new Error('[ERROR] 구입 금액은 숫자만 입력해 주세요.');
    }
    if (!Number.isInteger(money / 1000)) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.');
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
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      const numbers = input.split(',').map((digit) => Number(digit));
      const winningLotto = new Lotto(numbers);
      this.winningNumbers = winningLotto.getNumbers();
      this.requestBonusNumberInput();
    });
  }

  requestBonusNumberInput() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
      const number = Number(input);
      this.validateBonusNumber(number);
      this.bonusNumber = number;
      this.getResult();
    });
  }

  validateBonusNumber(number) {
    if (Number.isNaN(number) || number < 1 || number > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (this.winningNumbers.includes(number)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
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
}

module.exports = App;
